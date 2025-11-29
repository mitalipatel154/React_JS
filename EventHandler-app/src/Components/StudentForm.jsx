import React, { useRef, useState } from "react";

function StudentForm({ addStudent }) {
    const inputRef = useRef(null);
    const [error, setError] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();

        const value = inputRef.current.value;

        if (!value.trim()) {
            setError("Please enter a name");
            inputRef.current.focus();
            return;
        }

        addStudent(value);
        inputRef.current.value = "";
        setError("");
        inputRef.current.focus();
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                ref={inputRef}
                placeholder="Enter student name"
                onChange={() => setError("")}
            />

            <button type="submit">Add</button>

            {error && <p className="error">{error}</p>}
        </form>
    );
}

export default StudentForm;
