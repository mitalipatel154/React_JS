# 🚀 Firebase Auth System with React

A **Firebase Authentication System** built using **React**, **React Router**, **Bootstrap**, and **Firebase Auth**.  
This project allows users to **register**, **login**, and **access a protected dashboard**. 🔒

---

## ✨ Features

- 📝 User registration with email and password  
- 🔑 User login with email and password  
- 🛡️ Protected dashboard using a private route  
- 🚪 Logout functionality  
- 📱 Responsive UI using **Bootstrap**  
- 🌐 Client-side routing with **React Router v6**

---

## 🖼️ Screenshots

### 🟢 Register Page
![Register Page](./src/assets/images/screenshots/Register.png)

### 🔵 Login Page
![Login Page](./src/assets/images/screenshots/Login.png)

### 🟣 Dashboard Page
![Dashboard Page](./src/assets/images/screenshots/Dashboard.png)

---

## 🛠️ Technologies Used

- ⚛️ **React** (v18+)  
- 🧭 **React Router v6**  
- 🔥 **Firebase Authentication**  
- 🎨 **Bootstrap 5**  
- 💻 **JavaScript (ES6+)**

---

## 🗂️ Project Structure

```
src/
├── components/
│ └── PrivateRoute.jsx
├── firebase/
│ └── firebase.js
├── pages/
│ ├── Dashboard.jsx
│ ├── Login.jsx
│ └── Register.jsx
├── App.jsx
├── index.css
└── main.jsx
```

---

## ⚙️ Installation

### 1️⃣ Clone the repository

```bash
git clone https://github.com/your-username/inventory-tracking-system.git
```

### 2️⃣ Navigate into project

```bash
cd inventory-tracking-system
```

### 3️⃣ Install dependencies

```bash
npm install
```

### 4️⃣ Start the development server

```bash
npm run dev
```

---

## 🔥 Firebase Setup

1️⃣ Go to Firebase Console
2️⃣ Create a new project
3️⃣ Enable **Realtime Database**
4️⃣ Replace your Firebase configuration inside:

```
src/firebase/firebaseConfig.js
```

Example configuration:

```javascript
const firebaseConfig = {
  apiKey: "YOUR_KEY",
  authDomain: "YOUR_PROJECT.firebaseapp.com",
  databaseURL: "https://YOUR_PROJECT-default-rtdb.firebaseio.com/",
  projectId: "YOUR_PROJECT",
  storageBucket: "YOUR_PROJECT.appspot.com",
  messagingSenderId: "XXXX",
  appId: "XXXX"
}
```

---

## 👩‍💻 Author

**Mitali Patel**