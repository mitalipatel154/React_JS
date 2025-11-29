import React from "react";

function StudentCard({ student: s, deleteStudent, toggleDetails, markAttendance }) {
    return (
        <div
            style={{
                padding: "10px",
                border: "1px solid black",
                borderRadius: "6px",
                width: "260px",
            }}
        >
            <h3>{s.name}</h3>

            <button onClick={() => toggleDetails(s.id)}>
                {s.showDetails ? "Hide Details" : "Show Details"}
            </button>

            <button
                style={{ marginLeft: "10px", background: "red", color: "white" }}
                onClick={() => deleteStudent(s.id)}
            >
                Delete
            </button>

            {s.showDetails && (
                <div style={{ marginTop: "10px" }}>
                    <p>ID : {s.id}</p>

                    <p>Status : {s.isPresent === null ? "Not Marked" : s.isPresent ? "Present" : "Absent"}</p>

                    <button onClick={() => markAttendance(s.id, true)}>Present</button>
                    <button onClick={() => markAttendance(s.id, false)} style={{ marginLeft: "10px" }}>Absent</button>
                </div>
            )}
        </div>
    );
}

export default StudentCard;
