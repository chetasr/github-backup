from pydantic import BaseModel
from typing import List


class ScheduleInput(BaseModel):
    """
    Model for incoming schedules
    """

    repo: str
    branch: str
    cron: str


class ScheduleOutput(BaseModel):
    """
    Model for outgoing schedules
    """

    id: str
    next_run_time: str
    repo: str
    branch: str
