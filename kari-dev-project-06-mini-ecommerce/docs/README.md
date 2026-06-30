# Step-by-Step Guide - Mini Ecommerce Store

Follow these steps to build your mini ecommerce store.

## Step 1: Project Setup

```bash
mkdir mini-ecommerce && cd mini-ecommerce
mkdir frontend backend
```

Initialize frontend:
```bash
cd frontend
npm create vite@latest . -- --template react
npm install
npm install zustand react-router-dom axios
```

Initialize backend:
```bash
cd ../backend
npm init -y
npm install express mongoose cors dotenv
npm install -D nodemon
```

## Step 2: Backend - Product Model

1. Create Product schema: name, description, price, image, category, stock
2. Seed a few sample products
3. Create GET /api/products endpoint

## Step 3: Frontend - Product Listing

1. Create Products page
2. Fetch products from API
3. Display in a responsive grid
4. Add loading and error states

## Step 4: Shopping Cart

1. Create Zustand store for cart state
2. Add products with `addToCart(product)`
3. Remove items and update quantities
4. Persist cart to localStorage
5. Display cart count in header

## Step 5: Cart Page

1. List all cart items
2. Show item totals and grand total
3. Allow quantity changes
4. Remove item button
5. Empty cart state

## Step 6: Checkout Flow

1. Create checkout form (name, email, address)
2. Validate form inputs
3. Show order summary
4. Process "mock" payment
5. Show confirmation

## Step 7: Polish

1. Add product categories filter
2. Add search functionality
3. Smooth animations for cart
4. Skeleton loading states

## Milestone Checklist

- [ ] Products load from API
- [ ] Can add to cart
- [ ] Cart persists on refresh
- [ ] Can change quantities
- [ ] Checkout form validates input
- [ ] Mobile layout looks good
