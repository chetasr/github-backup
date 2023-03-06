import logging
import requests
import time


async def github_backup(repo, branch):
    """
    Backup a GitHub repository
    """
    logging.info(f"Backing up {repo} on branch {branch}")

    # Try to download the repo
    try:
        url = f"https://api.github.com/repos/{repo}/zipball/{branch}"
        r = requests.get(url, stream=True)

        with open(f"backups/{repo}-{branch}-{int(time.time)}.zip", "wb") as f:
            for chunk in r.iter_content(chunk_size=1024):
                f.write(chunk)

    # If there is an error, log it and raise it
    except Exception as e:
        logging.error(e)
        raise e
