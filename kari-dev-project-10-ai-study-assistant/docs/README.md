# Step-by-Step Guide - AI Study Assistant

Follow these steps to build your AI study assistant.

## Step 1: Project Setup

```bash
mkdir ai-study-assistant && cd ai-study-assistant
mkdir frontend backend
```

Backend:
```bash
cd backend
python -m venv venv
source venv/bin/activate
pip install fastapi uvicorn openai python-dotenv pydantic
```

Frontend:
```bash
cd ../frontend
npm create vite@latest . -- --template react
npm install axios react-markdown
```

## Step 2: OpenAI API Integration

1. Get API key from https://platform.openai.com
2. Store in `.env` on backend ONLY
3. Create OpenAI client in backend
4. Test basic completion endpoint

## Step 3: Chat API Endpoint

1. Create POST /api/chat endpoint
2. Accept message history in request body
3. Call OpenAI with system prompt
4. Return assistant response

```python
@app.post("/api/chat")
async def chat(request: ChatRequest):
    response = await openai.chat.completions.create(
        model="gpt-4",
        messages=request.messages
    )
    return {"reply": response.choices[0].message.content}
```

## Step 4: Frontend Chat UI

1. Create message list with auto-scroll
2. Add message input with send button
3. Style user vs AI messages differently
4. Add loading indicator while waiting

## Step 5: Conversation Management

1. Load history from state on mount
2. Append user message before API call
3. Append AI response after it arrives
4. Send full history with each request

## Step 6: Streaming (Optional)

1. Use OpenAI streaming response
2. Backend yields tokens as they arrive
3. Frontend displays tokens incrementally
4. Shows typing effect

## Step 7: System Prompt Engineering

Design a good tutor prompt:

```
You are a patient, encouraging coding tutor. 
- Explain concepts step by step
- Provide code examples
- Ask questions to check understanding
- Adapt explanations to beginner level
- Never give up on a student
```

## Step 8: Polish

1. Add markdown rendering for AI responses
2. Syntax highlight code blocks
3. Add copy button to code blocks
4. Handle API errors gracefully
5. Add rate limit handling

## Milestone Checklist

- [ ] Can send message and get AI response
- [ ] Chat history displays correctly
- [ ] Responses show in real-time
- [ ] Code blocks render nicely
- [ ] API errors display to user
- [ ] Mobile chat UI works
