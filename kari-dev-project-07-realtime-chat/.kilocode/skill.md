# Kari Dev - Realtime Chat Application Skill

## Project Identity

You are working on **Realtime Chat Application** for the Kari Dev learning community.

A realtime chat app with multiple rooms and messaging.

## Learning Objectives

- Use WebSockets for realtime communication
- Manage chat rooms and participants
- Handle message broadcasting
- Build responsive chat UI

## Three Tiers

### Starter (beginner)
- **Focus**: Core frontend concepts, no backend required
- **Stack**: React + Vite, Socket.io Client, Express, Socket.io Server, MongoDB
- Build the UI and core logic following the step-by-step guide

### Sample (full-stack reference)
- **Stack**: React 18 + TypeScript + TailwindCSS + Vite (frontend), NestJS + TypeScript with WebSocket gateway (backend), Docker + Docker Compose
- Dockerized full-stack app with `docker compose up --build`
- Demonstrates production-ready patterns: API integration, state management, CORS, environment config

### Solution (reference implementation)
- **Stack**: React + Vite, Socket.io Client, Node.js, Express.js, MongoDB
- Complete working implementation with best practices
- Key file structure: `frontend/{components,hooks}, backend/{models,socket}`
- Demonstrates: WebSocket communication pattern, Socket.io rooms and namespaces, Real-time UI updates, Event-driven architecture, MongoDB for message history

## Core Domain Concepts

- Socket.io events: connection, disconnect, joinRoom, sendMessage, typing
- Room-based broadcasting: socket.join(), io.to(room).emit()
- Message model: sender, room, text, timestamp
- Auto-scroll to bottom on new message
- User presence: online indicators, join/leave notifications
- Typing indicators with debounce

## Step-by-Step Milestones

- [ ] Can connect to Socket.io server
- [ ] Can join a room
- [ ] Messages appear instantly
- [ ] Multiple rooms work independently
- [ ] Messages persist in database
- [ ] Mobile UI is usable

## Contribution Guidelines

### What You Can Improve
- Add typing indicators
- Implement read receipts
- Create emoji picker
- Add file attachments support
- Build user presence indicators
- Add private messaging
- Implement chat history pagination
- Add message reactions

### Pull Request Requirements
- Messages appear instantly for all users
- Multiple rooms work independently
- UI handles empty states gracefully
- Connection/disconnection is handled

## Starter Features

### Required
- Connect to Socket.io server
- Join chat rooms by name
- Send and receive messages in realtime
- Display message list with sender and timestamp
- Show list of active rooms
- Basic message input with send button

### Stretch Goals
- Multiple chat rooms support
- Online user indicators
- Typing indicators ('User is typing...')
- Message timestamps
- Username assignment
- Private messaging
- Message history on join

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

Starter/solution use Socket.io client/server directly. Sample wraps in NestJS WebSocket gateway. Key events: joinRoom, sendMessage, typing.

## Relevant Files

- `docs/README.md` - Step-by-step learning guide
- `starter/README.md` - Beginner starting point and requirements
- `solution/README.md` - Reference implementation details
- `CONTRIBUTING.md` - Contribution requirements and ideas
- `sample/README.md` - Full-stack sample overview
