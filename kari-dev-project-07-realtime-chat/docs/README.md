# Step-by-Step Guide - Realtime Chat Application

Follow these steps to build the realtime chat application.

## Step 1: Project Setup

```bash
mkdir realtime-chat && cd realtime-chat
mkdir frontend backend
```

Frontend:
```bash
cd frontend
npm create vite@latest . -- --template react
npm install socket.io-client
```

Backend:
```bash
cd ../backend
npm init -y
npm install express socket.io mongoose cors dotenv
npm install -D nodemon
```

## Step 2: Backend - Socket.io Setup

1. Create HTTP server with Express
2. Initialize Socket.io with CORS config
3. Handle connection events
4. Log connections to console

```javascript
const io = new Server(server, { cors: { origin: "*" } });
io.on('connection', (socket) => {
  console.log('User connected:', socket.id);
});
```

## Step 3: Rooms and Messaging

1. Handle `joinRoom` event with `socket.join(room)`
2. Broadcast messages to room with `io.to(room).emit('message', data)`
3. Store messages in MongoDB
4. Send chat history when user joins

## Step 4: Frontend - Socket Connection

1. Create custom `useSocket` hook
2. Connect on component mount
3. Listen for `message` event
4. Update message state when received

## Step 5: Chat UI

1. Message list with auto-scroll to bottom
2. Message input with send button
3. Show sender name and timestamp
4. Style own vs others' messages differently

## Step 6: Room Management

1. Room list sidebar
2. Join/leave room buttons
3. Show room member count
4. Disconnect cleanup

## Step 7: Polish

1. Typing indicator
2. "User joined/left" system messages
3. Empty state when no messages
4. Connection status indicator

## Milestone Checklist

- [ ] Can connect to Socket.io server
- [ ] Can join a room
- [ ] Messages appear instantly
- [ ] Multiple rooms work independently
- [ ] Messages persist in database
- [ ] Mobile UI is usable
