import React from "react";
import StudentCard from "./StudentCard";

function StudentList({ students, deleteStudent, toggleDetails, markAttendance }) {
  if (students.length === 0) {
    return <p>No students added yet.</p>;
  }

  return (
    <ul style={{ padding: 0, listStyle: "none" }}>
      {students.map((s) => (
        <li key={s.id} style={{ marginBottom: "10px" }}>
          <StudentCard
            student={s}
            deleteStudent={deleteStudent}
            toggleDetails={toggleDetails}
            markAttendance={markAttendance}
          />
        </li>
      ))}
    </ul>
  );
}

export default StudentList;
