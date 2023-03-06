from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from scheduler import scheduler
from routers import jobs

app = FastAPI()

# Add CORS middleware
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_methods=["*"],
    allow_headers=["*"],
)


@app.on_event("startup")
async def startup_event():
    # Start the scheduler
    scheduler.start()


@app.on_event("shutdown")
async def shutdown_event():
    # Shutdown the scheduler
    scheduler.shutdown()


# Add the routers
app.include_router(jobs.router)
