# Starter - AI Study Assistant

This is your starting point for the AI study assistant. A Python FastAPI backend and React frontend are provided; you need to implement the AI integration and chat interface.

## What's Included

- FastAPI server setup
- React chat interface scaffold
- Basic message input/display components
- OpenAI API client placeholder
- Conversation state management

## What You Need to Build

### Required Features
1. Send user messages to AI API
2. Display AI responses in chat
3. Maintain conversation history in session
4. Stream responses for better UX
5. Handle API errors gracefully
6. Add system prompt for tutor behavior

### Stretch Goals
- Upload study materials as context
- RAG with vector database
- Generate practice quizzes from content
- Track learning progress
- Save conversations to database
- Multi-session support
- Export chat as markdown

## Getting Started

Backend:
```bash
cd backend
python -m venv venv
source venv/bin/activate  # Windows: venv\Scripts\activate
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

## Tips

- Use OpenAI Chat Completions API
- Set appropriate system prompt: "You are a patient coding tutor..."
- Keep API keys on backend only, never in frontend
- Use SSE (Server-Sent Events) for streaming
- Limit conversation history sent to API for cost control
