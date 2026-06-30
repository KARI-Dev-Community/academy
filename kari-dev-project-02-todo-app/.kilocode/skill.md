# Kari Dev - Todo App Skill

## Project Identity

You are working on **Todo App** for the Kari Dev learning community.

A full-featured todo application with local storage persistence.

## Learning Objectives

- Manage application state
- Use browser localStorage
- Implement CRUD operations
- Build responsive UI

## Three Tiers

### Starter (beginner)
- **Focus**: Core frontend concepts, no backend required
- **Stack**: HTML5, CSS3, JavaScript (basic)
- Build the UI and core logic following the step-by-step guide

### Sample (full-stack reference)
- **Stack**: React 18 + TypeScript + TailwindCSS + Vite (frontend), NestJS + TypeScript (backend), Docker + Docker Compose
- Dockerized full-stack app with `docker compose up --build`
- Demonstrates production-ready patterns: API integration, state management, CORS, environment config

### Solution (reference implementation)
- **Stack**: HTML5, CSS3, JavaScript (ES6+), Vanilla JS
- Complete working implementation with best practices
- Key file structure: `index.html, css/main.css, js/{app,storage,ui}.js`
- Demonstrates: DOM manipulation and event handling, LocalStorage API for data persistence, Array methods (map, filter, reduce), CSS transitions and animations, Modular JavaScript architecture

## Core Domain Concepts

- Todo data model: { id, text, completed, createdAt }
- Array methods: map, filter, reduce for state management
- Event delegation for dynamic list items
- localStorage.setItem/getItem for persistence
- DOM manipulation without frameworks

## Step-by-Step Milestones

- [ ] Can add a todo
- [ ] Can mark it complete
- [ ] Can delete it
- [ ] Filters work correctly
- [ ] Data persists after refresh
- [ ] Works on mobile

## Contribution Guidelines

### What You Can Improve
- Add task categories and tags
- Implement due dates and reminders
- Add drag-and-drop reordering
- Create a dark mode theme
- Add task search and filtering
- Implement localStorage persistence improvements
- Write unit tests with Jest

### Pull Request Requirements
- All existing features still work
- New features are tested manually
- Code follows the existing style
- README is updated if needed

## Starter Features

### Required
- Add new todos via input field and Enter key
- Mark todos as complete/incomplete
- Delete individual todos
- Show count of active todos
- Filter: All / Active / Completed
- Persist todos in localStorage

### Stretch Goals
- Edit existing todos
- Due dates with overdue highlighting
- Drag and drop to reorder
- Clear all completed button
- Export todos to JSON

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

Starter and solution use vanilla JS. Sample uses React+NestJS+Zustand for state.

## Relevant Files

- `docs/README.md` - Step-by-step learning guide
- `starter/README.md` - Beginner starting point and requirements
- `solution/README.md` - Reference implementation details
- `CONTRIBUTING.md` - Contribution requirements and ideas
- `sample/README.md` - Full-stack sample overview
