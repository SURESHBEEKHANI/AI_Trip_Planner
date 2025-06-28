from fastapi import APIRouter, HTTPException
from pydantic import BaseModel, Field
from agent.agentic_workflow import GraphBuilder
from fastapi.responses import JSONResponse
from typing import Optional
import os
from pathlib import Path

router = APIRouter(prefix="/travel", tags=["travel"])

class QueryRequest(BaseModel):
    query: str = Field(..., min_length=1, max_length=1000, description="Travel planning query")

class QueryResponse(BaseModel):
    answer: str
    status: str = "success"

@router.post("/query", response_model=QueryResponse)
async def query_travel_agent(query: QueryRequest):
    """
    Generate a travel plan based on the user's query.
    
    Args:
        query: The travel planning request containing the user's query
        
    Returns:
        QueryResponse: The generated travel plan and status
        
    Raises:
        HTTPException: If there's an error processing the request
    """
    try:
        # Initialize the graph builder
        graph = GraphBuilder(model_provider="groq")
        react_app = graph()
        
        # Generate graph visualization (optional, for debugging)
        try:
            png_graph = react_app.get_graph().draw_mermaid_png()
            output_dir = Path("output")
            output_dir.mkdir(exist_ok=True)
            
            graph_file = output_dir / "travel_graph.png"
            with open(graph_file, "wb") as f:
                f.write(png_graph)
        except Exception as graph_error:
            pass
        
        # Process the query
        messages = {"messages": [query.query]}
        output = react_app.invoke(messages)
        
        # Extract the final answer
        if isinstance(output, dict) and "messages" in output:
            final_output = output["messages"][-1].content
        else:
            final_output = str(output)
        
        if not final_output or final_output.strip() == "":
            raise HTTPException(status_code=500, detail="Generated response is empty")
        
        return QueryResponse(
            answer=final_output,
            status="success"
        )
        
    except HTTPException:
        # Re-raise HTTP exceptions as-is
        raise
    except Exception as e:
        raise HTTPException(
            status_code=500, 
            detail="An error occurred while generating your travel plan. Please try again."
        )