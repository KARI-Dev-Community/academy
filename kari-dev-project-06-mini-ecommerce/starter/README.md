# Starter - Mini Ecommerce Store

This is your starting point for the mini ecommerce store. A basic React frontend and Express backend structure is provided; you need to implement the store functionality.

## What's Included

- React app with Vite scaffold
- Express server setup
- Basic product listing page
- Shopping cart context placeholder
- MongoDB connection setup

## What You Need to Build

### Required Features
1. Product listing with images and prices
2. Add to cart / remove from cart
3. Cart sidebar showing items and total
4. Quantity adjustment in cart
5. Simple checkout form (static is acceptable)
6. Responsive mobile layout

### Stretch Goals
- Product search and filtering
- Product detail pages
- Category navigation
- User authentication for checkout
- Order confirmation page
- Payment integration (Stripe test mode)
- Product reviews

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

- Use React Context or Zustand for cart state
- Keep cart state synced with localStorage
- Start with mock product data, then connect API
- Test checkout flow end-to-end early
