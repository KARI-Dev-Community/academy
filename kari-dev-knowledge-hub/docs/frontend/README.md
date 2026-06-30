# Frontend Guides

Frontend development is everything that runs in the user's browser. It is what users see, touch, and click.

## HTML5

HTML5 provides the structure of web pages.

### Semantic HTML

Use meaningful tags instead of generic divs.

```html
<header>
  <nav>
    <ul>
      <li><a href="/">Home</a></li>
      <li><a href="/about">About</a></li>
    </ul>
  </nav>
</header>

<main>
  <article>
    <h1>Article Title</h1>
    <p>Article content...</p>
  </article>
</main>

<footer>
  <p>Copyright 2024</p>
</footer>
```

### Forms and Validation

```html
<form id="login-form">
  <label for="email">Email</label>
  <input type="email" id="email" required />

  <label for="password">Password</label>
  <input type="password" id="password" required minlength="8" />

  <button type="submit">Login</button>
</form>
```

## CSS3

CSS3 controls the visual presentation.

### Flexbox

```css
.container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 1rem;
}
```

### Grid

```css
.grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
}
```

### Animations

```css
.fade-in {
  animation: fadeIn 0.5s ease-in;
}

@keyframes fadeIn {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}
```

## JavaScript (ES6+)

### Arrow Functions

```javascript
const add = (a, b) => a + b;
const multiply = (a, b) => a * b;
```

### Destructuring

```javascript
const user = { name: "John", age: 30, email: "john@example.com" };
const { name, email } = user;
```

### Async/Await

```javascript
async function fetchUser(id) {
  try {
    const response = await fetch(`/api/users/${id}`);
    const user = await response.json();
    return user;
  } catch (error) {
    console.error("Failed to fetch user:", error);
  }
}
```

## React

React is a library for building user interfaces.

### Components

```jsx
function Welcome({ name }) {
  return <h1>Hello, {name}!</h1>;
}
```

### Hooks

```jsx
import { useState, useEffect } from "react";

function Counter() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    document.title = `Count: ${count}`;
  }, [count]);

  return (
    <button onClick={() => setCount(count + 1)}>
      Count: {count}
    </button>
  );
}
```

### State Management

For larger apps, consider:
- Redux
- Zustand
- Context API

## Responsive Design

Always design for mobile first.

```css
.container {
  padding: 1rem;
}

@media (min-width: 768px) {
  .container {
    max-width: 720px;
    margin: 0 auto;
  }
}
```

## Related Projects

- [Project 01: Portfolio Website](../projects/portfolio.md)
- [Project 06: Mini Ecommerce](../projects/mini-ecommerce.md)
- [Project 09: Admin Dashboard](../projects/admin-dashboard.md)
