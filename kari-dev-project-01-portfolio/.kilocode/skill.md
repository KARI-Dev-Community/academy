# Kari Dev - Portfolio Website Skill

## Project Identity

You are working on **Portfolio Website** for the Kari Dev learning community.

A personal portfolio website to showcase your projects and skills.

## Learning Objectives

- Create responsive layouts with HTML and CSS
- Deploy a static website
- Practice semantic HTML structure
- Implement smooth navigation

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
- Key file structure: `index.html, css/{reset,main,dark}.css, js/{main,theme,scroll}.js`
- Demonstrates: Semantic HTML for accessibility, CSS custom properties for theming, Intersection Observer API for scroll animations, Event delegation, localStorage for preferences

## Core Domain Concepts

- Responsive design: 375px mobile, 768px tablet, 1440px desktop
- Semantic HTML: header, main, section, footer
- CSS Grid for project cards, Flexbox for navigation
- Intersection Observer for scroll animations
- localStorage for dark/light mode persistence
- CSS custom properties (variables) for theming

## Step-by-Step Milestones

- [ ] HTML validates at https://validator.w3.org
- [ ] Works on mobile (375px width)
- [ ] Works on tablet (768px width)
- [ ] Works on desktop (1440px width)
- [ ] No console errors
- [ ] Lighthouse score above 90

## Contribution Guidelines

### What You Can Improve
- Add new sections (Projects, Blog, Contact form)
- Improve accessibility (ARIA labels, keyboard navigation)
- Add animations and transitions
- Optimize performance (lazy loading images)
- Write better CSS (CSS Grid layouts, custom properties)
- Add dark mode toggle

### Pull Request Requirements
- Code is clean and commented
- Works in latest Chrome, Firefox, and Safari
- Mobile responsive
- No console errors

## Starter Features

### Required
- Personal introduction in the About section
- At least 3 project cards with descriptions
- Contact form (can be static)
- Smooth scrolling navigation
- Mobile-friendly hamburger menu

### Stretch Goals
- Dark/light mode toggle
- Animated section reveals on scroll
- Resume download button
- Testimonials section

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

Starter and solution use plain HTML/CSS/JS. Sample uses full React+NestJS+Docker stack.

## Relevant Files

- `docs/README.md` - Step-by-step learning guide
- `starter/README.md` - Beginner starting point and requirements
- `solution/README.md` - Reference implementation details
- `CONTRIBUTING.md` - Contribution requirements and ideas
- `sample/README.md` - Full-stack sample overview
