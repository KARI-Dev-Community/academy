# Project 10: AI Study Assistant

An AI-powered learning assistant for interactive study sessions.

## Learning Objectives

- Integrate AI APIs into applications
- Design chat-based learning interfaces
- Prompt engineering for educational content
- Manage conversation state and history

## Tech Stack

- Python
- FastAPI
- React (Vite)
- OpenAI API
- ChromaDB (vector storage)

## Setup Guide

Backend:

```bash
git clone https://github.com/kari-dev/project-10-ai-study-assistant.git
cd project-10-ai-study-assistant/backend
python -m venv venv
source venv/bin/activate
pip install -r requirements.txt
cp .env.example .env
uvicorn main:app --reload
```

Frontend:

```bash
cd frontend
npm install
npm run dev
```

## Screenshots

![Assistant](docs/screenshots/assistant.png)

## Contribution Guide

See [CONTRIBUTING.md](../../CONTRIBUTING.md) for our general contribution workflow.
