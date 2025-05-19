---
title: "Understanding JavaScript Closures"
category: "Programming"
date: "2025-04-10"
---

JavaScript closures are a powerful feature that allow inner functions to access variables from an outer function even after the outer function has returned.

```js
function outer() {
  let count = 0;
  return function inner() {
    count++;
    console.log(count);
  };
}

const counter = outer();
counter(); // 1
counter(); // 2
```
