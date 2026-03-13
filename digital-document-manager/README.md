# 📂 Digital Document Manager

A modern **Digital Document Manager** built using **React ⚛️, Redux Toolkit 🧠, Firebase Realtime Database 🔥, and Tailwind CSS 🎨**.

This application allows users to **upload, preview, search, rename, download, and delete documents** in a clean and responsive dashboard interface.

The project stores files in **Base64 format inside Firebase Realtime Database**, so it works **without Firebase Storage** and is perfect for **learning projects and academic submissions 🎓**.

---

# 🚀 Features

✅ Upload documents (Images 🖼️ & PDFs 📄)
✅ File preview before upload 👀
✅ Drag & Drop file upload 🖱️
✅ Progress bar during upload 📊
✅ Preview uploaded files inside cards
✅ Rename documents ✏️
✅ Delete documents 🗑️
✅ Download documents ⬇️
✅ Real-time updates from Firebase 🔄
✅ Search documents by name 🔎
✅ Clean responsive UI using Tailwind CSS 🎨
✅ Container-based dashboard layout 📦

---

# 🛠️ Tech Stack

## 🎨 Frontend

* React ⚛️
* Redux Toolkit 🧠
* Tailwind CSS 🎨

## 🔥 Backend / Database

* Firebase Realtime Database

## ⚙️ Tools

* Vite ⚡
* JavaScript (ES6)

---

# 📁 Project Structure

```
src
│
├── app
│   └── store.js
│
├── components
│   ├── FileCard.jsx
│   ├── FileList.jsx
│   ├── SearchFilter.jsx
│   └── UploadFile.jsx
│
├── features
│   └── fileSlice.js
│
├── firebase
│   └── firebaseConfig.js
│
├── pages
│   └── Dashboard.jsx
│
├── App.jsx
├── main.jsx
└── index.css
```

---

# ⚙️ How It Works

1️⃣ The user selects a file or drags it into the upload area.
2️⃣ The file is converted into **Base64 format** using `FileReader`.
3️⃣ The Base64 file data is stored in **Firebase Realtime Database 🔥**.
4️⃣ The app listens for **real-time database updates 🔄**.
5️⃣ Files are displayed as **cards with preview, rename, delete, and download options 📂**.

---

# 💻 Installation

## 1️⃣ Clone the repository

```
git clone https://github.com/yourusername/digital-document-manager.git
```

---

## 2️⃣ Navigate to the project folder

```
cd digital-document-manager
```

---

## 3️⃣ Install dependencies

```
npm install
```

---

## 4️⃣ Run the development server

```
npm run dev
```

The application will start on:

```
http://localhost:5173
```

---

# 🔥 Firebase Setup

1️⃣ Open **Firebase Console**
2️⃣ Create a new project
3️⃣ Enable **Realtime Database**
4️⃣ Set database rules for development

Example rules:

```
{
  "rules": {
    ".read": true,
    ".write": true
  }
}
```

5️⃣ Copy your Firebase configuration into:

```
src/firebase/firebaseConfig.js
```

---

# 📤 File Upload Method

Instead of using Firebase Storage, this project stores files as **Base64 strings inside Firebase Realtime Database**.

Example stored file data:

```
{
  "name": "document.pdf",
  "type": "application/pdf",
  "data": "data:application/pdf;base64,JVBERi0xLjQKJc...",
  "date": "2026-03-13"
}
```

This allows the app to **preview files instantly in the browser 👀** without needing storage permissions.

---

# 🖥️ Dashboard Features

The dashboard includes:

📤 File upload section
🖱️ Drag & drop upload area
👀 File preview before upload
📊 Upload progress indicator
📂 File cards with preview
✏️ Rename and delete options
⬇️ Download files
🔎 Search filter

---

# 👩‍💻 Author

Created by **Mitali Patel**