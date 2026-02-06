# 📝 Redux Task Builder App

A simple and clean **Task Management application** built using **React** and **Redux Toolkit**.  
This app allows users to **add, edit, update, and delete tasks** using a single input field with proper state management.

---

## 🚀 Features

- ➕ Add unlimited tasks  
- ✏️ Edit tasks using the same input field  
- 🔄 Update tasks smoothly  
- ❌ Delete tasks  
- 🧠 Centralized state management with Redux Toolkit  
- 🎨 Clean and responsive UI  

---

## 🛠️ Tech Stack

- **React.js** (Functional Components & Hooks)
- **Redux Toolkit**
- **React Redux**
- **CSS**

---

## 📂 Project Structure
```
src/
├── app/
│ └── store.js
│
├── components/
│ ├── AddTask.jsx
│ └── TaskList.jsx
│
├── features/
│ └── tasks/
│ └── taskSlice.js
│
├── App.jsx
├── App.css
├── main.jsx / index.js
└── index.css
```

---

## 🧠 How It Works

### 🔹 Redux Store

- All tasks are stored inside the **Redux store**.
- The `taskSlice` is responsible for handling:
  - **Add Task**
  - **Update Task**
  - **Delete Task**
- This ensures centralized and predictable state management.

---

### 🔹 Edit Logic

- Edit-related state (`editIndex`, `editValue`) is managed inside **`App.jsx`**.
- When the **Edit** button is clicked:
  - The selected task value is passed to the input field.
- When **Update Task** is clicked:
  - The task is updated in the Redux store.
  - The app exits edit mode automatically.

---

### 🔹 Single Input Field

- A **single input field** is reused for both **Add** and **Update** operations.
- The button label changes dynamically:
  - **Add Task** → when creating a new task
  - **Update Task** → when editing an existing task
- This provides a clean and user-friendly experience.

---

## ⚙️ Installation & Setup

### 1️⃣ Clone the repository
```
git clone <your-repository-url>
```

### 2️⃣ Navigate into the project folder
```
cd employee-management
```

### 3️⃣ Install dependencies
```
npm install
```

### 4️⃣ Start the development server
```
npm run dev
```

The app will open at:
http://localhost:5173/

---