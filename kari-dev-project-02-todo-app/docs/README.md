# Step-by-Step Guide - Todo App

Follow these steps to build your todo app from scratch.

## Step 1: Project Setup

Initialize your project:

```bash
mkdir todo-app && cd todo-app
npm init -y
npm install -D vite
```

Create `index.html`, `style.css`, and `app.js`.

## Step 2: HTML Structure

Build the UI:

1. Input field with "Add" button
2. Container for the todo list
3. Filter buttons (All, Active, Completed)
4. Footer showing item count

## Step 3: CSS Styling

1. Style the input and button to look like a single unit
2. Style each todo item with checkbox, text, and delete button
3. Add hover effects and transitions
4. Make it look good on mobile

## Step 4: JavaScript Data Model

Define what a todo looks like:

```javascript
{
  id: Date.now(),
  text: "Buy groceries",
  completed: false,
  createdAt: new Date().toISOString()
}
```

## Step 5: Core Functions

Implement these functions:

- `addTodo(text)` - Create and save a new todo
- `toggleTodo(id)` - Switch completed status
- `deleteTodo(id)` - Remove from array and storage
- `getTodos()` - Load from localStorage
- `saveTodos()` - Save to localStorage
- `renderTodos()` - Update the DOM

## Step 6: Event Handling

1. Listen for form submit or Enter key
2. Delegate click events on the todo list
3. Wire up filter buttons

## Step 7: Polish

1. Add empty state message when no todos exist
2. Show relative timestamps ("2 hours ago")
3. Add confirmation before clearing completed
4. Add keyboard shortcuts (e.g., "/" to focus input)

## Milestone Checklist

- [ ] Can add a todo
- [ ] Can mark it complete
- [ ] Can delete it
- [ ] Filters work correctly
- [ ] Data persists after refresh
- [ ] Works on mobile
