# Kari Dev - Expense Tracker Skill

## Project Identity

You are working on **Expense Tracker** for the Kari Dev learning community.

Track income and expenses with visual charts.

## Learning Objectives

- Implement charts and data visualization
- Calculate totals and summaries
- Design clean financial interfaces
- Practice data filtering and sorting

## Three Tiers

### Starter (beginner)
- **Focus**: Core frontend concepts, no backend required
- **Stack**: HTML5, CSS3, JavaScript, Chart.js (CDN)
- Build the UI and core logic following the step-by-step guide

### Sample (full-stack reference)
- **Stack**: React 18 + TypeScript + TailwindCSS + Vite (frontend), NestJS + TypeScript (backend), Docker + Docker Compose
- Dockerized full-stack app with `docker compose up --build`
- Demonstrates production-ready patterns: API integration, state management, CORS, environment config

### Solution (reference implementation)
- **Stack**: HTML5, CSS3, JavaScript (ES6+), Chart.js
- Complete working implementation with best practices
- Key file structure: `index.html, css/main.css, js/{app,transactions,chart,storage}.js`
- Demonstrates: Chart.js integration for data visualization, Currency formatting with Intl.NumberFormat, localStorage for data persistence, CSS Grid for responsive layout, Modular JavaScript organization

## Core Domain Concepts

- Transaction data model: { id, type, amount, category, description, date }
- Chart.js doughnut chart for income/expense visualization
- Currency formatting with Intl.NumberFormat
- Balance = income - expenses calculation
- Category-based filtering

## Step-by-Step Milestones

- [ ] Can add income and expenses
- [ ] Balance updates correctly
- [ ] Chart displays proportions
- [ ] Can delete transactions
- [ ] Data persists after refresh
- [ ] Mobile layout works

## Contribution Guidelines

### What You Can Improve
- Add income vs expense categorization
- Implement monthly budget limits with alerts
- Add export to CSV/PDF functionality
- Create pie and bar charts with Chart.js
- Support multiple currencies
- Add receipt image uploads
- Write data validation functions

### Pull Request Requirements
- Charts render correctly with sample data
- Calculations are accurate
- UI is responsive
- No broken links in documentation

## Starter Features

### Required
- Add income and expense transactions
- Display transaction history list
- Calculate and show total balance
- Calculate total income and total expenses
- Render a pie chart showing income vs expenses
- Delete individual transactions

### Stretch Goals
- Filter by date range
- Add transaction categories (food, transport, etc.)
- Set and track budget limits per category
- Export data to CSV
- Dark mode support
- Local storage persistence

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

Starter/solution use vanilla JS + Chart.js. Sample adds React+NestJS+Docker.

## Relevant Files

- `docs/README.md` - Step-by-step learning guide
- `starter/README.md` - Beginner starting point and requirements
- `solution/README.md` - Reference implementation details
- `CONTRIBUTING.md` - Contribution requirements and ideas
- `sample/README.md` - Full-stack sample overview
