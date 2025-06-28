from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from Routes.main_router import main_router

# Create FastAPI app
app = FastAPI(
    title="AI Trip Planner API",
    description="An intelligent travel planning API powered by AI agents",
    version="1.0.0"
)

# Add CORS middleware
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # Configure this properly for production
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Include the main router
app.include_router(main_router)

@app.get("/")
async def root():
    """Root endpoint to check if the API is running."""
    return {"message": "AI Trip Planner API is running!", "status": "healthy"}

@app.get("/health")
async def health_check():
    """Health check endpoint."""
    return {"status": "healthy", "service": "AI Trip Planner API"}

if __name__ == "__main__":
    import uvicorn
    uvicorn.run(
        app, 
        host="0.0.0.0", 
        port=8000, 
        reload=True,
        log_level="info"
    )
