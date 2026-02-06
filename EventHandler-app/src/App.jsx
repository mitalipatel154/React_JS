import React, { useState } from "react";
import StudentList from "./Components/StudentList";
import './App.css';

function App() {
  const [students, setStudents] = useState([]);

  const addStudent = (name) => {
    const newStudent = {
      id: Date.now(),
      name: name,
      isPresent: null,
      showDetails: false,
    };
    setStudents([...students, newStudent]);
  };

  const deleteStudent = (id) => {
    setStudents(students.filter((s) => s.id !== id));
  };

  const toggleDetails = (id) => {
    setStudents(
      students.map((s) =>
        s.id === id ? { ...s, showDetails: !s.showDetails } : s
      )
    );
  };

  const markAttendance = (id, status) => {
    setStudents(
      students.map((s) =>
        s.id === id ? { ...s, isPresent: status } : s
      )
    );
  };

  return (
    <div style={{ padding: "20px" }}>
      <h1>Student Attendance</h1>

      <input type="text" placeholder="Enter Student Name" id="studentInput" className="student-input"/>

      <button
        onClick={() => {
          const name = document.getElementById("studentInput").value;
          if (name.trim() !== "") {
            addStudent(name);
            document.getElementById("studentInput").value = "";
          }
        }}
      >
        Add Student
      </button>

      <StudentList
        students={students}
        deleteStudent={deleteStudent}
        toggleDetails={toggleDetails}
        markAttendance={markAttendance}
      />
    </div>
  );
}

export default App;
