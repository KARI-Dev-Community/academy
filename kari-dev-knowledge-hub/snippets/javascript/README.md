# JavaScript Snippets

Reusable JavaScript patterns.

## Fetch with Error Handling

```javascript
async function fetchData(url) {
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`HTTP ${response.status}: ${response.statusText}`);
    }
    return await response.json();
  } catch (error) {
    console.error("Fetch failed:", error);
    throw error;
  }
}
```

## Debounce Function

```javascript
function debounce(func, delay) {
  let timeoutId;
  return (...args) => {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => func(...args), delay);
  };
}

// Usage
const searchInput = document.querySelector("#search");
searchInput.addEventListener("input", debounce((e) => {
  console.log("Searching:", e.target.value);
}, 300));
```

## Deep Clone Object

```javascript
function deepClone(obj) {
  return JSON.parse(JSON.stringify(obj));
}

// Or for functions and Dates:
function betterDeepClone(obj) {
  if (obj === null || typeof obj !== "object") return obj;
  if (obj instanceof Date) return new Date(obj);
  if (obj instanceof Array) return obj.map(betterDeepClone);
  
  const cloned = {};
  for (const key in obj) {
    if (obj.hasOwnProperty(key)) {
      cloned[key] = betterDeepClone(obj[key]);
    }
  }
  return cloned;
}
```

## Local Storage Helper

```javascript
const storage = {
  get(key) {
    try {
      return JSON.parse(localStorage.getItem(key));
    } catch {
      return null;
    }
  },
  set(key, value) {
    localStorage.setItem(key, JSON.stringify(value));
  },
  remove(key) {
    localStorage.removeItem(key);
  }
};
```
