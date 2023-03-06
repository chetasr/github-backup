from apscheduler.schedulers.asyncio import AsyncIOScheduler

# Create scheduler and add jobstore
scheduler = AsyncIOScheduler()
scheduler.add_jobstore("sqlalchemy", url="sqlite:///db/jobs.sqlite")
