from typing import List
from fastapi import APIRouter, HTTPException
from models.Schedule import ScheduleOutput
from scheduler import scheduler
from models.Schedule import ScheduleInput
from jobs.github_backup import github_backup
from apscheduler.triggers.cron import CronTrigger
from ghapi.all import GhApi

router = APIRouter(prefix="/jobs", tags=["Jobs"])


@router.get("")
async def get_jobs():
    """
    Get all jobs
    """

    job_data = []
    jobs = scheduler.get_jobs()
    for job in jobs:
        job_data.append(
            {
                "id": job.id,
                "next_run_time": job.next_run_time,
                **job.kwargs,
            }
        )

    return job_data


@router.post("")
async def add_job(job: ScheduleInput):
    """
    Add a job
    """

    gh = GhApi()
    try:
        repo = gh.repos.get(*job.repo.split("/"))
        branches = [
            branch.name for branch in gh.repos.list_branches(*job.repo.split("/"))
        ]

    except Exception:
        raise HTTPException(status_code=400, detail="reponf")

    if job.branch not in branches:
        raise HTTPException(status_code=400, detail="brnf")

    created_job = scheduler.add_job(
        github_backup,
        CronTrigger.from_crontab(job.cron),
        kwargs=job.dict(exclude={"cron"}),
    )
    return {"id": created_job.id}


@router.post("/bulk")
async def add_bulk_job(jobs: List[ScheduleInput]):
    """
    Add multiple jobs
    """

    for job in jobs:
        await add_job(job)

    return {"status": "ok"}
