# Step-by-Step Guide - Expense Tracker

Follow these steps to build your expense tracker from scratch.

## Step 1: Project Setup

```bash
mkdir expense-tracker && cd expense-tracker
npm init -y
npm install -D vite chart.js
```

Create `index.html`, `style.css`, and `app.js`.

## Step 2: HTML Structure

Create the layout:

1. Header with app title
2. Balance display (income, expense, total)
3. Transaction form (type selector, amount, description)
4. Transaction list container
5. Chart canvas for visualization
6. Filter controls

## Step 3: CSS Styling

1. Use CSS Grid for the overall layout
2. Style the balance cards with different accent colors
3. Style the transaction list items
4. Make form elements consistent and accessible
5. Ensure mobile responsiveness

## Step 4: JavaScript Data Model

```javascript
// A transaction object
{
  id: crypto.randomUUID(),
  type: 'income' | 'expense',
  amount: 100,
  category: 'food',
  description: 'Grocery shopping',
  date: '2024-01-15'
}
```

## Step 5: Core Logic

Implement these functions:

- `addTransaction(transaction)` - Add and save
- `deleteTransaction(id)` - Remove and update display
- `calculateTotals()` - Sum income, expense, balance
- `updateUI()` - Refresh all displays
- `renderChart()` - Update Chart.js instance

## Step 6: Chart Integration

1. Get canvas context
2. Create doughnut chart with income/expense data
3. Update chart when transactions change
4. Style chart colors to match your theme

## Step 7: Polish

1. Add empty state illustration or text
2. Format currency properly ($1,234.56)
3. Add animations for adding/removing items
4. Add category icons or colors

## Milestone Checklist

- [ ] Can add income and expenses
- [ ] Balance updates correctly
- [ ] Chart displays proportions
- [ ] Can delete transactions
- [ ] Data persists after refresh
- [ ] Mobile layout works
