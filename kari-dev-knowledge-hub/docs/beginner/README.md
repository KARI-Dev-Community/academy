# Beginner Guides

Welcome to the beginner section of Kari Dev. This is where your journey starts.

## Getting Started with Code

If you have never written code before, start here.

### What is Programming?

Programming is the process of creating instructions for computers to follow. These instructions are written in programming languages like JavaScript, Python, or Java.

### Your First Program

The traditional first program prints "Hello, World!" to the screen.

```javascript
console.log("Hello, World!");
```

```python
print("Hello, World!")
```

### Setting Up Your Environment

Before you can write code, you need the right tools.

1. Install a code editor ([VS Code](https://code.visualstudio.com/))
2. Install Git: https://git-scm.com/downloads
3. Create a GitHub account: https://github.com
4. Write your first HTML file

### HTML Basics

HTML is the building block of the web.

```html
<!DOCTYPE html>
<html>
  <head>
    <title>My First Page</title>
  </head>
  <body>
    <h1>Hello, World!</h1>
    <p>This is my first web page.</p>
  </body>
</html>
```

### CSS Basics

CSS styles your HTML.

```css
body {
  font-family: Arial, sans-serif;
  background-color: #f0f0f0;
}

h1 {
  color: #333;
  text-align: center;
}
```

### JavaScript Basics

JavaScript makes web pages interactive.

```javascript
const heading = document.querySelector("h1");
heading.addEventListener("click", () => {
  alert("You clicked the heading!");
});
```

### How to Ask for Help

- Search for your error message on Google
- Ask in our community discussions
- Read the documentation for the tool you are using
- Break your problem into smaller pieces

### Next Steps

Once you are comfortable with HTML, CSS, and JavaScript basics, move on to our first project:

- [Project 01: Portfolio Website](../projects/portfolio.md)
