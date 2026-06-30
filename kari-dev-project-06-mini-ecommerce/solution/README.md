# Solution - Mini Ecommerce Store

This directory contains the complete reference implementation of the mini ecommerce store.

## What's Included

- Product catalog with categories
- Shopping cart with quantity controls
- Persistent cart (localStorage)
- Checkout form with validation
- Responsive mobile-first design
- Express backend with product API
- Mock payment processing

## Tech Stack

Frontend:
- React 18 with Vite
- TailwindCSS for styling
- Zustand for state management
- React Router

Backend:
- Node.js with Express
- MongoDB with Mongoose
- CORS configured

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
│   │   ├── pages/
│   │   ├── store/
│   │   └── App.jsx
│   └── package.json
├── backend/
│   ├── src/
│   │   ├── models/
│   │   ├── routes/
│   │   └── app.js
│   └── package.json
└── README.md
```

## Key Concepts Demonstrated

- Client-side state management
- RESTful API consumption
- Responsive ecommerce UI patterns
- Form validation
- Cart state persistence
