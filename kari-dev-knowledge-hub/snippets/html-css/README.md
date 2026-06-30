# HTML/CSS Snippets

Reusable HTML and CSS patterns.

## Responsive Navigation

```html
<nav class="navbar">
  <div class="nav-brand">Kari Dev</div>
  <button class="nav-toggle">Menu</button>
  <ul class="nav-links">
    <li><a href="/docs">Docs</a></li>
    <li><a href="/projects">Projects</a></li>
    <li><a href="/community">Community</a></li>
  </ul>
</nav>
```

```css
.navbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
  background: #333;
  color: white;
}

.nav-links {
  display: none;
  list-style: none;
}

@media (min-width: 768px) {
  .nav-links {
    display: flex;
    gap: 1.5rem;
  }
}
```

## Card Component

```html
<div class="card">
  <img src="thumbnail.png" alt="Project" />
  <div class="card-body">
    <h3>Project Title</h3>
    <p>Brief description of the project.</p>
    <a href="/project">View Project</a>
  </div>
</div>
```

```css
.card {
  border: 1px solid #e0e0e0;
  border-radius: 8px;
  overflow: hidden;
  transition: box-shadow 0.3s;
}

.card:hover {
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
}
```
