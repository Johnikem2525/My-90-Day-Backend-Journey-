# Day 9: Function Declarations, Arrow Functions, and the Call Stack  

**Date:** October 14, 2025  

**Focus:** Exploring different function types and understanding how function calls are handled internally.  

---

## Topics Covered

- Function Declaration vs Function Expression  
- Hoisting (calling functions before declaration)  
- Arrow Functions (`=>`) and implicit return  
- Understanding the Call Stack and how JavaScript executes functions  
- Recursion and stack overflow basics  

---

## Exercises Completed

### Exercise 1: Hoisting Test  
Wrote a function using declaration notation and tested calling it before definition.  
Then compared it with a function expression that fails when called before being defined.  
**Concepts:** Hoisting, declaration vs expression behavior.  
**File:** `hoisting.js`

---

### Exercise 2: Arrow Function Simplification  
Converted regular function expressions into arrow functions for brevity and clarity.
**Concepts:** Arrow syntax, implicit return, single-parameter simplification.  
**File:** `arrow.js`

---

### Exercise 3: Understanding the Call Stack  

Created a nested function call chain to observe how execution order follows the stack (LIFO).  
Logged entry and exit points to visualize how functions are called and returned.  
**Concepts:** Stack tracing, execution order, debugging with logs.  
**File:** `callStack.js`

---

### Exercise 4: The Infinite Loop Problem  
Recreated the “chicken and egg” recursion example to understand stack overflow.  
Added comments predicting that the program would crash due to infinite function calls.  
**Concepts:** Recursion, infinite loop detection, stack overflow awareness.  
**File:** `chicken.js`

---

## Code Summary  

Today’s lessons strengthened understanding of how JavaScript executes functions internally.  

Learned that:  

- Function declarations are hoisted, expressions are not.  
- Arrow functions simplify short expressions and return values automatically.  
- The call stack controls how nested functions execute and return.  
- Improper recursion can crash a program by exceeding memory limits.  

---

## Faith Reflection  

Understanding the “call stack” teaches that every action returns a result, just as every step of faith brings a response from God in His timing.  

> “Commit thy works unto the Lord, and thy thoughts shall be established.”  
> Proverbs 16:3 (KJV)
