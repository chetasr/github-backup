# GitHub Backup System

This is a simple system to automatically backup your GitHub repositories on a schedule.

## Requirements
- Docker
- Docker Compose

## Setup
1. Clone this repository.
2. Make sure Docker daemon is running, and run `docker-compose up` in the root directory of this repository.
3. Go to `http://localhost:3000` and access the web UI.

## Usage
Backup tasks can be created either in bulk or individually. Bulk tasks can be created by uploading a JSON file with the following format:

```json
[
    {
        "repo": "agronholm/apscheduler",
        "branch": "master",
        "cron": "* * * * *"
    },
    {
        "repo": "agronholm/apscheduler",
        "branch": "master",
        "cron": "* * * * *"
    },
    {
        "repo": "agronholm/apscheduler",
        "branch": "master",
        "cron": "* * * * *"
    }
]
```

The `repo` field is the owner and name of the repository, in `{owner}/{name}` format, and the `branch` field is the name of the branch to backup. The `cron` field is a cron expression that specifies the schedule of the backup task.

Individual tasks can be created by clicking the `Add Job` button in the top right corner of the web UI. Bulk task JSON files can be uploaded by clicking the `Upload File` button in the top right corner of the web UI.