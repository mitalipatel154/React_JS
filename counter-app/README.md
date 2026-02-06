# Counter Component

A simple React counter component using the `useState` hook. This component displays a count value and provides buttons to increase or decrease the count.

---

## 🚀 Features
- Displays current count  
- Increase button (+1)  
- Decrease button (-1)  
- Uses React functional components  
- Uses `useState` hook for state management  

---

## 📦 Code Example
```jsx
import React, { useState } from "react";

function Counter(){
    const [count, setCount] = useState(0);

    return(
        <div>
            <h2>Count : {count}</h2>  
            <button onClick={() => setCount(count - 1)}>Decrease</button>
            <button onClick={() => setCount(count + 1)}>Increase</button>
        </div> 
    )
}

export default Counter;

```

---

## 📚 How It Works
- `useState(0)` initializes `count` with value `0`.  
- Clicking **Increase** calls `setCount(count + 1)` which updates state.  
- Clicking **Decrease** calls `setCount(count - 1)`.  
- Component re-renders whenever the state changes.

---

## 🛠️ How to Use
1. Create a file named `Counter.jsx`.
2. Copy the component code into that file.
3. Import and use it in `App.jsx`:

```jsx
import Counter from "./Counter";

function App() {
  return (
    <div>
      <Counter />
    </div>
  );
}

export default App;
