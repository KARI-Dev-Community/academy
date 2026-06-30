# Kari Dev - AI Study Assistant Skill

## Project Identity

You are working on **AI Study Assistant** for the Kari Dev learning community.

An AI-powered learning assistant for interactive study sessions.

## Learning Objectives

- Integrate AI APIs into applications
- Design chat-based learning interfaces
- Prompt engineering for educational content
- Manage conversation state and history

## Three Tiers

### Starter (beginner)
- **Focus**: Core frontend concepts, no backend required
- **Stack**: FastAPI, React + Vite, basic chat interface
- Build the UI and core logic following the step-by-step guide

### Sample (full-stack reference)
- **Stack**: React 18 + TypeScript + TailwindCSS + Vite (frontend), NestJS + TypeScript with OpenAI proxy (backend), Docker + Docker Compose
- Dockerized full-stack app with `docker compose up --build`
- Demonstrates production-ready patterns: API integration, state management, CORS, environment config

### Solution (reference implementation)
- **Stack**: Python, FastAPI, React + Vite, OpenAI API, ChromaDB
- Complete working implementation with best practices
- Key file structure: `backend/{main,routes/chat,services/openai,requirements.txt}, frontend/{components/{Chat,Message,ChatInput},hooks/useChat}`
- Demonstrates: LLM API integration and prompt design, Streaming responses with FastAPI, Conversation state management, Frontend streaming UI, Markdown and syntax highlighting

## Core Domain Concepts

- OpenAI Chat Completions API: messages array with system/user/assistant roles
- System prompt design: patient tutor, step-by-step explanations, code examples
- Streaming responses: backend yields tokens, frontend renders incrementally
- Conversation state: full history sent with each request
- FastAPI async endpoints for non-blocking AI calls
- Prompt templates for different learning modes

## Step-by-Step Milestones

- [ ] Can send message and get AI response
- [ ] Chat history displays correctly
- [ ] Responses show in real-time
- [ ] Code blocks render nicely
- [ ] API errors display to user
- [ ] Mobile chat UI works

## Contribution Guidelines

### What You Can Improve
- Add streaming responses for better UX
- Implement conversation history persistence
- Create study mode (quiz generation)
- Add PDF/document upload for context
- Implement RAG with ChromaDB or Pinecone
- Add multi-language support
- Create prompt templates library
- Add source citation in responses

### Pull Request Requirements
- AI responses are relevant and helpful
- API keys are not exposed in client code
- Conversation state handles edge cases
- UI shows loading/error states

## Starter Features

### Required
- Send user messages to AI API
- Display AI responses in chat
- Maintain conversation history in session
- Stream responses for better UX
- Handle API errors gracefully
- Add system prompt for tutor behavior

### Stretch Goals
- Upload study materials as context
- RAG with vector database
- Generate practice quizzes from content
- Track learning progress
- Save conversations to database
- Multi-session support
- Export chat as markdown

## Sample Project Structure

```
sample/
├── frontend/          # React + Vite app
│   ├── src/
│   │   ├── main.tsx   # Entry point
│   │   ├── App.tsx    # Main component with API call
│   │   └── index.css  # TailwindCSS
│   ├── Dockerfile
│   └── package.json
├── backend/           # NestJS app
│   ├── src/
│   │   ├── main.ts    # Nest bootstrap
│   │   ├── app.module.ts
│   │   ├── app.controller.ts
│   │   └── app.service.ts
│   ├── Dockerfile
│   └── package.json
├── docker-compose.yml
└── README.md
```

## Key Implementation Notes

Only project with Python backend. Starter/solution use FastAPI. Sample uses NestJS as AI proxy. Key: keep API keys backend-only.

## Relevant Files

- `docs/README.md` - Step-by-step learning guide
- `starter/README.md` - Beginner starting point and requirements
- `solution/README.md` - Reference implementation details
- `CONTRIBUTING.md` - Contribution requirements and ideas
- `sample/README.md` - Full-stack sample overview
