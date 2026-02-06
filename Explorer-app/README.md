# 🌟 React Explorer – Learning React Fundamentals

A beginner-friendly React project that demonstrates all the core concepts of React using simple example components.

This project includes demos for:
- JSX
- Props
- State
- Lists & Filters
- Forms
- Class Components
- Lifecycle concepts

All components are placed inside **src/components/**.

---

## 📁 Project Structure
```
src/
│── App.jsx
│── main.jsx
│
└── components/
  │── JSX.jsx
  │── PropsState.jsx
  │── ListFilter.jsx
  │── Form.jsx
  │── ClassComponent.jsx

```

---

## ⚛️ 1. JSX & Component Rendering  
**File:** `src/components/JSX.jsx`

Teaches:
- JSX syntax
- Rendering variables
- Nested components
- Virtual DOM rendering concept

Features:
- Shows a greeting message
- Renders a child component

---

## 🧮 2. Props & State Exploration  
**File:** `src/components/PropsState.jsx`

Covers:
- Passing props
- Managing state using `useState`
- Updating UI based on state change

Features:
- Greeting message using props
- Counter (increase/decrease)
- ON/OFF toggle button

---

## 📋 3. List Rendering & Filtering  
**File:** `src/components/ListFilter.jsx`

Covers:
- Rendering list using `map()`
- Using unique `key`
- Filtering items using search input
- Case-insensitive search using `.toLowerCase()`

Features:
- List of fruits
- Real-time filtering

---

## 📝 4. Forms & Event Handling  
**File:** `src/components/Form.jsx`

Covers:
- Controlled components
- Handling form inputs
- Using `preventDefault()` to stop page reload

Features:
- Input field for name
- Alert on submit

---

## 🔄 5. Lifecycle Concepts (Functional Understanding)

Explains:
- Mounting  
- Updating  
- Unmounting  
- Side effects  

Console logs help understand how React updates the UI.

---

## 🛠️ 6. Class Components  
**File:** `src/components/ClassComponent.jsx`

Covers:
- `constructor()`
- Using `this.state`
- Updating state inside class
- Lifecycle methods:
  - `componentDidMount`
  - `componentDidUpdate`
  - `componentWillUnmount`

Features:
- Counter inside a class component
- Logs lifecycle events in console

---

## 🚀 How to Run

```bash
npm install
npm run dev
