# Step-by-Step Guide - Admin Dashboard

Follow these steps to build your admin dashboard.

## Step 1: Project Setup

```bash
mkdir admin-dashboard && cd admin-dashboard
mkdir frontend backend
```

Frontend:
```bash
cd frontend
npm create vite@latest . -- --template react
npm install recharts react-router-dom axios
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p
```

Backend:
```bash
cd ../backend
npm init -y
npm install express mongoose cors dotenv
npm install -D nodemon
```

## Step 2: Dashboard Layout

1. Create Sidebar component with navigation links
2. Create DashboardLayout wrapper
3. Make sidebar collapsible on mobile
4. Add header with user menu

## Step 3: Stats Cards

1. Fetch summary stats from API
2. Create reusable StatCard component
3. Add icons and trend indicators
4. Style with consistent spacing

## Step 4: Revenue Chart

1. Install Recharts
2. Create RevenueChart component
3. Fetch time-series data
4. Configure LineChart with axes and tooltips
5. Add loading and empty states

## Step 5: Data Table

1. Create reusable DataTable component
2. Add sortable column headers
3. Add search input
4. Implement client-side filtering
5. Add pagination controls

## Step 6: User Management Page

1. Create Users page route
2. Fetch users from API
3. Add status badges (active/inactive)
4. Implement delete with confirmation
5. Add edit modal

## Step 7: Backend APIs

1. Create stats aggregation endpoint
2. Create users list endpoint with pagination
3. Create user update/delete endpoints
4. Add proper indexes for performance

## Step 8: Polish

1. Add dark mode toggle
2. Add loading spinners
3. Add toast notifications for actions
4. Ensure responsive on tablets

## Milestone Checklist

- [ ] Dashboard shows 4 stat cards
- [ ] Revenue chart displays correctly
- [ ] User table is sortable
- [ ] Search filters table results
- [ ] Pagination works
- [ ] Mobile sidebar toggles
- [ ] Dark mode works
