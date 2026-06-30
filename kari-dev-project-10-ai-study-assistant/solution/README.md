# Solution - AI Study Assistant

This directory contains the complete reference implementation of the AI study assistant.

## What's Included

- Chat interface with message history
- Streaming AI responses
- Conversation session management
- Prompt engineering for educational context
- Error handling and retry logic
- Markdown rendering for code blocks
- Responsive design

## Tech Stack

Backend:
- Python with FastAPI
- OpenAI API (GPT-4)
- python-dotenv for configuration
- Pydantic for data validation

Frontend:
- React 18 with Vite
- TailwindCSS
- Vercel AI SDK or custom streaming client
- react-markdown for rendering

## Running the Solution

Backend:
```bash
cd backend
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

## Project Structure

```
solution/
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   │   ├── Chat.jsx
│   │   │   ├── Message.jsx
│   │   │   └── ChatInput.jsx
│   │   ├── hooks/
│   │   │   └── useChat.js
│   │   └── App.jsx
│   └── package.json
├── backend/
│   ├── main.py
│   ├── routes/
│   │   └── chat.py
│   ├── services/
│   │   └── openai.py
│   └── requirements.txt
└── README.md
```

## Key API Design

```python
# POST /api/chat
{
  "messages": [
    {"role": "system", "content": "You are a coding tutor..."},
    {"role": "user", "content": "Explain Python decorators"},
    {"role": "assistant", "content": "Decorators are..."},
    {"role": "user", "content": "Can you show an example?"}
  ]
}
```

## Key Concepts Demonstrated

- LLM API integration and prompt design
- Streaming responses with FastAPI
- Conversation state management
- Frontend streaming UI
- Markdown and syntax highlighting
