# Starter - Admin Dashboard

This is your starting point for the admin dashboard. A basic React layout with a sidebar and placeholder pages is provided; you need to implement the data visualization and management features.

## What's Included

- React app with Vite
- Basic dashboard layout (sidebar + main content)
- Navigation component
- Chart.js installed
- Mock data files

## What You Need to Build

### Required Features
1. Stats cards (total users, revenue, active sessions)
2. Line chart showing revenue over time
3. Bar chart showing user signups
4. Data table with users list
5. Search and filter for the table
6. Pagination for large datasets

### Stretch Goals
- Export table data to CSV
- Date range picker for charts
- Dark mode toggle
- Real-time data updates with polling
- User management (edit/delete users)
- Activity log table
- Notification badges

## Getting Started

```bash
git clone https://github.com/kari-dev/project-09-admin-dashboard.git
cd project-09-admin-dashboard/frontend
npm install
npm run dev
```

Backend (if included):
```bash
cd ../backend
npm install
cp .env.example .env
npm run dev
```

## Tips

- Use Recharts for easier React chart integration (or Chart.js)
- Create reusable Table and Card components
- Use React Query or SWR for data fetching
- Start with mock data, then connect API
- Keep sidebar navigation accessible on mobile
