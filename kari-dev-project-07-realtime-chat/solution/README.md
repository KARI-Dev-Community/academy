# Solution - Realtime Chat Application

This directory contains the complete reference implementation of the realtime chat application.

## What's Included

- Multi-room realtime chat
- User join/leave notifications
- Typing indicators
- Message timestamps
- MongoDB message persistence
- Online user tracking
- Responsive chat UI

## Tech Stack

Frontend:
- React 18 with Vite
- Socket.io Client
- CSS Modules or TailwindCSS

Backend:
- Node.js with Express
- Socket.io Server
- MongoDB with Mongoose

## Running the Solution

Frontend:
```bash
cd frontend
npm install
npm run dev
```

Backend:
```bash
cd backend
npm install
cp .env.example .env
npm run dev
```

## Project Structure

```
solution/
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   │   ├── Chat.jsx
│   │   │   ├── MessageList.jsx
│   │   │   └── MessageInput.jsx
│   │   ├── hooks/
│   │   │   └── useSocket.js
│   │   └── App.jsx
│   └── package.json
├── backend/
│   ├── src/
│   │   ├── models/Message.js
│   │   ├── socket.js
│   │   └── app.js
│   └── package.json
└── README.md
```

## Key Socket Events

```javascript
// Client emits
socket.emit('joinRoom', { username, room });
socket.emit('sendMessage', { message });
socket.emit('typing', { isTyping });

// Server emits
socket.on('message', (data) => { ... });
socket.on('roomUsers', (users) => { ... });
socket.on('typing', (user) => { ... });
```

## Key Concepts Demonstrated

- WebSocket communication pattern
- Socket.io rooms and namespaces
- Real-time UI updates
- Event-driven architecture
- MongoDB for message history
