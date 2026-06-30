# Solution - Admin Dashboard

This directory contains the complete reference implementation of the admin dashboard.

## What's Included

- Stats cards with key metrics
- Revenue line chart (7-day trend)
- User signups bar chart
- Sortable data table with search
- CSV export functionality
- Responsive sidebar navigation
- Dark/light mode toggle
- Real-time data with polling

## Tech Stack

Frontend:
- React 18 with Vite
- TailwindCSS
- Recharts for data visualization
- React Router

Backend:
- Node.js with Express
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
│   │   │   ├── DashboardLayout.jsx
│   │   │   ├── Sidebar.jsx
│   │   │   ├── StatCard.jsx
│   │   │   ├── RevenueChart.jsx
│   │   │   └── DataTable.jsx
│   │   ├── pages/
│   │   │   ├── Dashboard.jsx
│   │   │   ├── Users.jsx
│   │   │   └── Settings.jsx
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

- Data visualization with charts
- Complex table UI with sorting/filtering
- Dashboard layout patterns
- Theme switching with CSS variables
- CSV generation and download
