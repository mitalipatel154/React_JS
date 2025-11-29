# 📝 Student Attendance React App

## Project Overview
This is a simple **Student Attendance Management** application built with **React**.  
It demonstrates key React concepts such as:  

- Component-based architecture  
- State management with `useState`  
- Event handling (`onClick`, `onSubmit`)  
- Conditional rendering  
- Using refs for form input  
- Dynamic list rendering  

Users can **add students**, **delete students**, **toggle student details**, and **mark attendance** (Present / Absent).  

---

## 🚀 Features

- Add students using a form  
- Delete students  
- Toggle student details view  
- Mark attendance (Present / Absent)  
- Validation for empty input  
- Clean and responsive layout  

---

## 📁 Project Structure

```
src/
├── Components/
│ ├── StudentCard.jsx
│ ├── StudentForm.jsx
│ └── StudentList.jsx
├── App.jsx
├── App.css
└── index.js

```

**Component Responsibilities:**

- **StudentForm.jsx** – Handles adding students and input validation  
- **StudentList.jsx** – Renders the list of students  
- **StudentCard.jsx** – Displays each student, attendance buttons, delete functionality, and toggles details  

---

## 📸 Screenshot

Here’s a preview of the app:

![Screenshot](src/assets/images/Screenshot%20.png)

---

## 🚀 How to Run

```bash
npm install
npm run dev
