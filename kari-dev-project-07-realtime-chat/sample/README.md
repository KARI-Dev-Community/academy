# Sample: React chat UI with Socket.io + NestJS WebSocket gateway

A minimal working sample demonstrating the core concepts of this project.

## Tech Stack

- Frontend: React 18 + TypeScript + TailwindCSS + Vite
- Backend: NestJS + TypeScript
- Infrastructure: Docker + Docker Compose

## Quick Start

### Prerequisites
- Docker & Docker Compose installed
- Node.js 20+ (for local development)

### Run with Docker (Recommended)

```bash
docker compose up --build
```

- Frontend: http://localhost:3000
- Backend API: http://localhost:3001/api

### Run Locally

```bash
# Terminal 1 - Backend
cd backend
npm install
npm run start:dev

# Terminal 2 - Frontend  
cd frontend
npm install
npm run dev
```

## Project Structure

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

## API Endpoints

| Method | Path | Description |
|--------|------|-------------|
| GET | /api | Health check |

## What This Sample Demonstrates

- Reactive frontend with hooks and API integration
- Modular backend with NestJS controllers and services
- Dockerized full-stack deployment with one command
- CORS-enabled communication between services
