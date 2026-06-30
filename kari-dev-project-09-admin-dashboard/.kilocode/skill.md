# Kari Dev - Admin Dashboard Skill

## Project Identity

You are working on **Admin Dashboard** for the Kari Dev learning community.

A data-rich admin dashboard with charts and data tables.

## Learning Objectives

- Design data dashboard layouts
- Integrate charts and metrics
- Implement data filtering and export
- Access control for admin features

## Three Tiers

### Starter (beginner)
- **Focus**: Core frontend concepts, no backend required
- **Stack**: React + Vite, Chart.js, basic dashboard layout
- Build the UI and core logic following the step-by-step guide

### Sample (full-stack reference)
- **Stack**: React 18 + TypeScript + TailwindCSS + Vite (frontend), NestJS + TypeScript (backend), Docker + Docker Compose
- Dockerized full-stack app with `docker compose up --build`
- Demonstrates production-ready patterns: API integration, state management, CORS, environment config

### Solution (reference implementation)
- **Stack**: React + Vite, TailwindCSS, Recharts, React Router, Node.js, Express.js, MongoDB
- Complete working implementation with best practices
- Key file structure: `frontend/{components/{DashboardLayout,Sidebar,StatCard,RevenueChart,DataTable},pages/{Dashboard,Users,Settings}}, backend/{models,routes}`
- Demonstrates: Data visualization with charts, Complex table UI with sorting/filtering, Dashboard layout patterns, Theme switching with CSS variables, CSV generation and download

## Core Domain Concepts

- Dashboard layout: collapsible sidebar, top header, main content area
- Stat cards with trend indicators (up/down arrows)
- Recharts for React-native charting (LineChart, BarChart)
- Sortable data tables with client-side filtering
- Pagination: limit/skip or cursor-based
- Dark mode toggle with CSS variables

## Step-by-Step Milestones

- [ ] Dashboard shows 4 stat cards
- [ ] Revenue chart displays correctly
- [ ] User table is sortable
- [ ] Search filters table results
- [ ] Pagination works
- [ ] Mobile sidebar toggles
- [ ] Dark mode works

## Contribution Guidelines

### What You Can Improve
- Add more chart types (line, bar, area)
- Implement data export to CSV/Excel
- Create advanced table filtering
- Add dark mode support
- Build user management CRUD
- Add notification system
- Implement role-based access
- Create audit log for admin actions

### Pull Request Requirements
- Charts render with real data
- Tables handle empty states
- Filters work correctly
- Layout is responsive

## Starter Features

### Required
- Stats cards (total users, revenue, active sessions)
- Line chart showing revenue over time
- Bar chart showing user signups
- Data table with users list
- Search and filter for the table
- Pagination for large datasets

### Stretch Goals
- Export table data to CSV
- Date range picker for charts
- Dark mode toggle
- Real-time data updates with polling
- User management (edit/delete users)
- Activity log table
- Notification badges

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

Uses Recharts (preferred) or Chart.js. Solution includes CSV export. Mock data in starter, API-connected in solution.

## Relevant Files

- `docs/README.md` - Step-by-step learning guide
- `starter/README.md` - Beginner starting point and requirements
- `solution/README.md` - Reference implementation details
- `CONTRIBUTING.md` - Contribution requirements and ideas
- `sample/README.md` - Full-stack sample overview
