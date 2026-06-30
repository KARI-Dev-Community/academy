# Starter - Realtime Chat Application

This is your starting point for the realtime chat application. A basic React frontend and Socket.io server structure is provided; you need to implement the chat functionality.

## What's Included

- React app with Vite
- Socket.io client setup
- Express server with Socket.io
- Basic chat UI components
- MongoDB connection

## What You Need to Build

### Required Features
1. Connect to Socket.io server
2. Join chat rooms by name
3. Send and receive messages in realtime
4. Display message list with sender and timestamp
5. Show list of active rooms
6. Basic message input with send button

### Stretch Goals
- Multiple chat rooms support
- Online user indicators
- Typing indicators ("User is typing...")
- Message timestamps
- Username assignment
- Private messaging
- Message history on join

## Getting Started

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

## Tips

- Use `socket.on('message', callback)` to receive messages
- Use `socket.emit('sendMessage', data)` to send
- Rooms: `socket.join('room-name')` and `io.to('room').emit(...)`
- Store messages in MongoDB for persistence
- Test with multiple browser tabs to simulate users
