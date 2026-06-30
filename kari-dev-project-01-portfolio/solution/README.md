# Solution - Portfolio Website

This directory contains the complete reference implementation of the portfolio project.

## What's Included

- Fully responsive portfolio website
- 5 sections: Hero, About, Projects, Skills, Contact
- Dark/light mode toggle with localStorage persistence
- Animated scroll reveals using Intersection Observer
- Mobile hamburger menu
- Contact form with basic validation
- Optimized images and fonts

## Tech Stack

- HTML5 (semantic markup)
- CSS3 (Grid, Flexbox, custom properties)
- Vanilla JavaScript (no frameworks)
- Netlify deployment

## Running the Solution

```bash
git clone https://github.com/kari-dev/project-01-portfolio.git
cd project-01-portfolio/solution
npm install
npm run dev
```

Visit `http://localhost:3000` to see the completed project.

## Project Structure

```
solution/
├── index.html
├── css/
│   ├── reset.css
│   ├── main.css
│   └── dark.css
├── js/
│   ├── main.js
│   ├── theme.js
│   └── scroll.js
├── images/
└── README.md
```

## Key Concepts Demonstrated

- Semantic HTML for accessibility
- CSS custom properties for theming
- Intersection Observer API for scroll animations
- Event delegation
- localStorage for preferences
