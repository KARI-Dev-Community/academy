# Step-by-Step Guide - Portfolio Website

Follow these steps to build your portfolio from scratch.

## Step 1: Project Setup

Create a new project folder and initialize your files:

```bash
mkdir portfolio && cd portfolio
npm init -y
npm install -D vite
```

Create `index.html`, `style.css`, and `main.js`.

## Step 2: HTML Structure

Build the page skeleton:

1. Add `<!DOCTYPE html>` and viewport meta tag
2. Create `<header>` with navigation
3. Add `<section>` elements for each page area
4. Use semantic tags: `<main>`, `<article>`, `<footer>`

## Step 3: Basic Styling

1. Add CSS reset (box-sizing, margins)
2. Set base font and colors
3. Style the navigation bar
4. Make the hero section full-height

## Step 4: Responsive Layout

1. Use Flexbox for the navigation
2. Add CSS Grid for project cards
3. Write media queries for tablet and mobile
4. Test by resizing your browser

## Step 5: JavaScript Interactivity

1. Add smooth scroll behavior
2. Implement mobile menu toggle
3. Add scroll animations with Intersection Observer
4. Create dark/light mode toggle

## Step 6: Content and Polish

1. Write your personal bio
2. Add real project descriptions
3. Include your skills and technologies
4. Add a contact form (static is fine for now)

## Step 7: Deployment

1. Push code to GitHub
2. Connect repository to Netlify or Vercel
3. Configure custom domain (optional)
4. Test the live site

## Milestone Checklist

- [ ] HTML validates at https://validator.w3.org
- [ ] Works on mobile (375px width)
- [ ] Works on tablet (768px width)
- [ ] Works on desktop (1440px width)
- [ ] No console errors
- [ ] Lighthouse score above 90
