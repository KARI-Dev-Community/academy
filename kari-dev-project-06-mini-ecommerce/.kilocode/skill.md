# Kari Dev - Mini Ecommerce Store Skill

## Project Identity

You are working on **Mini Ecommerce Store** for the Kari Dev learning community.

A functional ecommerce storefront with product listings and cart.

## Learning Objectives

- Manage shopping cart state
- Handle product variants and quantities
- Implement checkout flow
- Design product listing UI

## Three Tiers

### Starter (beginner)
- **Focus**: Core frontend concepts, no backend required
- **Stack**: React + Vite, Express.js, MongoDB
- Build the UI and core logic following the step-by-step guide

### Sample (full-stack reference)
- **Stack**: React 18 + TypeScript + TailwindCSS + Vite (frontend), NestJS + TypeScript (backend), Docker + Docker Compose
- Dockerized full-stack app with `docker compose up --build`
- Demonstrates production-ready patterns: API integration, state management, CORS, environment config

### Solution (reference implementation)
- **Stack**: React + Vite, TailwindCSS, Zustand, Express.js, MongoDB
- Complete working implementation with best practices
- Key file structure: `frontend/{components,pages,store}, backend/{models,routes}`
- Demonstrates: Client-side state management, RESTful API consumption, Responsive ecommerce UI patterns, Form validation, Cart state persistence

## Core Domain Concepts

- Product model: name, description, price, image, category, stock
- Cart state management (Zustand recommended)
- localStorage persistence for cart across sessions
- RESTful product API consumption
- Form validation for checkout
- Quantity management and stock checking

## Step-by-Step Milestones

- [ ] Products load from API
- [ ] Can add to cart
- [ ] Cart persists on refresh
- [ ] Can change quantities
- [ ] Checkout form validates input
- [ ] Mobile layout looks good

## Contribution Guidelines

### What You Can Improve
- Add product search and filters
- Implement product reviews and ratings
- Create wishlist functionality
- Add payment integration (Stripe)
- Implement order history
- Add product categories and tags
- Create an admin panel for inventory
- Write unit and integration tests

### Pull Request Requirements
- Cart additions and removals work correctly
- Checkout flow completes without errors
- UI is responsive on mobile
- API errors display properly to users

## Starter Features

### Required
- Product listing with images and prices
- Add to cart / remove from cart
- Cart sidebar showing items and total
- Quantity adjustment in cart
- Simple checkout form (static is acceptable)
- Responsive mobile layout

### Stretch Goals
- Product search and filtering
- Product detail pages
- Category navigation
- User authentication for checkout
- Order confirmation page
- Payment integration (Stripe test mode)
- Product reviews

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

All tiers use React frontend + Express/MongoDB backend. Sample adds NestJS+Docker. Solution uses Zustand for cart state.

## Relevant Files

- `docs/README.md` - Step-by-step learning guide
- `starter/README.md` - Beginner starting point and requirements
- `solution/README.md` - Reference implementation details
- `CONTRIBUTING.md` - Contribution requirements and ideas
- `sample/README.md` - Full-stack sample overview
