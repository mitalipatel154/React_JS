# 🌟 Redux Counter App

A beginner-friendly React project demonstrating **Redux Toolkit** with multiple counters and basic state management.  
This project shows how to manage state for multiple counters, increment, decrement, and reset using Redux in React.

---

## ⚛️ Counter State & Redux Slice  
**File:** `src/features/counterSlice.js`

Covers:
- Creating a slice using `createSlice` from Redux Toolkit
- Defining initial state as an array of objects
- Writing reducers for:
  - Incrementing `count`
  - Decrementing `count`
  - Incrementing `count2`
  - Decrementing `count2`
  - Resetting both counters

Features:
- Helper functions (`getCount`, `getCount2`, `buildState`) to handle array-based state
- Keeps logic clean and reusable

---

## 🖥️ Connecting Redux to React  
**File:** `src/App.js`

Covers:
- Using `useSelector` to read state
- Using `useDispatch` to dispatch actions
- Updating UI in response to state changes

Features:
- Two counters displayed on the page
- Buttons to increment, decrement, and reset counters
- Simple inline styling for layout

---

## 🏗️ Store Configuration  
**File:** `src/store.js`

Covers:
- Using `configureStore` from Redux Toolkit
- Registering the counter reducer

Features:
- Provides Redux store to the entire app via `<Provider>` in `index.js`

---

## 🛠️ Usage

- Click **`+ Count`** to increment the first counter.
- Click **`- Count`** to decrement the first counter.
- Click **`+ Count2`** to increment the second counter.
- Click **`- Count2`** to decrement the second counter.
- Click **`Reset`** to reset both counters to zero.

---

## 📚 Technologies Used

- **React.js**
- **Redux Toolkit**
- **React-Redux**
- **JavaScript (ES6+)**

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