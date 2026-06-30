# Starter - Todo App

This is your starting point for the todo app. A basic HTML/CSS/JS structure is provided; you need to implement the core functionality.

## What's Included

- HTML structure with input field and todo list container
- Basic CSS styling for layout
- Empty JavaScript file for your logic

## What You Need to Build

### Required Features
1. Add new todos via input field and Enter key
2. Mark todos as complete/incomplete
3. Delete individual todos
4. Show count of active todos
5. Filter: All / Active / Completed
6. Persist todos in localStorage

### Stretch Goals
- Edit existing todos
- Due dates with overdue highlighting
- Drag and drop to reorder
- Clear all completed button
- Export todos to JSON

## Getting Started

```bash
git clone https://github.com/kari-dev/project-02-todo-app.git
cd project-02-todo-app
npm install
npm run dev
```

Open `http://localhost:3000` and start building!

## Tips

- Start with the data model: what does a todo object look like?
- Write functions first, then wire up the UI
- Use `localStorage.setItem` and `getItem` for persistence
- Test edge cases: empty input, special characters, long text
