# Starter - Expense Tracker

This is your starting point for the expense tracker. A basic structure is provided; you need to implement the tracking and visualization logic.

## What's Included

- HTML structure with transaction form and list
- Basic CSS for layout
- Chart.js library loaded via CDN
- Placeholder for chart canvas

## What You Need to Build

### Required Features
1. Add income and expense transactions
2. Display transaction history list
3. Calculate and show total balance
4. Calculate total income and total expenses
5. Render a pie chart showing income vs expenses
6. Delete individual transactions

### Stretch Goals
- Filter by date range
- Add transaction categories (food, transport, etc.)
- Set and track budget limits per category
- Export data to CSV
- Dark mode support
- Local storage persistence

## Getting Started

```bash
git clone https://github.com/kari-dev/project-03-expense-tracker.git
cd project-03-expense-tracker
npm install
npm run dev
```

Open `http://localhost:3000` and start building!

## Tips

- Start with the data model: `{ id, type, amount, category, date, description }`
- Use `Intl.NumberFormat` for currency formatting
- Chart.js pie chart needs `{ type: 'doughnut', data: {...} }`
- Test with edge cases: zero values, very large numbers, negative amounts
