# Python Snippets

Reusable Python patterns.

## FastAPI Basic Setup

```python
from fastapi import FastAPI
from pydantic import BaseModel

app = FastAPI()

class Item(BaseModel):
    name: str
    price: float
    description: str | None = None

@app.get("/")
async def root():
    return {"message": "Hello, World!"}

@app.post("/items/")
async def create_item(item: Item):
    return {"item": item}
```

## API Client with Error Handling

```python
import httpx
from tenacity import retry, stop_after_attempt, wait_exponential

@retry(stop=stop_after_attempt(3), wait=wait_exponential(multiplier=1, min=2, max=10))
async def fetch_data(url: str, params: dict | None = None):
    async with httpx.AsyncClient() as client:
        response = await client.get(url, params=params, timeout=10.0)
        response.raise_for_status()
        return response.json()
```

## Environment Configuration

```python
import os
from pydantic_settings import BaseSettings

class Settings(BaseSettings):
    database_url: str
    api_key: str
    debug: bool = False

    class Config:
        env_file = ".env"

settings = Settings()
```

## Async File Operations

```python
import aiofiles

async def read_json_file(path: str):
    async with aiofiles.open(path, "r") as f:
        content = await f.read()
        return json.loads(content)
```
