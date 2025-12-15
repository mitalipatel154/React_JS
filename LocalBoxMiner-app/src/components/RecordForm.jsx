import { useEffect, useState } from "react";

export default function RecordForm({ onSave, editingRecord, onCancel }) {
    const [formData, setFormData] = useState({ name: "", email: "" });
    const [error, setError] = useState("");


    useEffect(() => {
        if (editingRecord) setFormData(editingRecord);
    }, [editingRecord]);


    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };


    const handleSubmit = (e) => {
        e.preventDefault();
        if (!formData.name || !formData.email) {
            setError("All fields are required");
            return;
        }
        onSave(formData);
        setFormData({ name: "", email: "" });
        setError("");
    };


    return (
        <form className="form" onSubmit={handleSubmit}>
            <h2>{editingRecord ? "Edit Record" : "Add Record"}</h2>


            <input
                name="name"
                placeholder="Enter Your Name"
                value={formData.name}
                onChange={handleChange}
            />


            <input
                name="email"
                type="email"
                placeholder="Enter Your Email"
                value={formData.email}
                onChange={handleChange}
            />


            {error && <p className="error">{error}</p>}


            <div className="buttons">
                <button type="submit">{editingRecord ? "Update" : "Add"}</button>
                {editingRecord && (
                    <button type="button" className="cancel" onClick={onCancel}>Cancel</button>
                )}
            </div>
        </form>
    );
}