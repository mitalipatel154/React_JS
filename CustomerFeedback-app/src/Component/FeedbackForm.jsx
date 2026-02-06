import React, { useState, useRef } from "react";
import DynamicList from "./DynamicList";


function FeedbackForm({ onSubmitFeedback }) {
    const [form, setForm] = useState({
        name: "",
        email: "",
        category: "",
        priority: "",
        description: "",
    });


    const screenshotRef = useRef();
    const notesRef = useRef();


    const [steps, setSteps] = useState([""]);
    const [suggestions, setSuggestions] = useState([""]);


    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };


    const handleSubmit = (e) => {
        e.preventDefault();


        const newFeedback = {
            ...form,
            screenshot: screenshotRef.current.value,
            notes: notesRef.current.value,
            steps,
            suggestions,
            time: new Date().toLocaleString(),
        };


        onSubmitFeedback(newFeedback);


        setForm({ name: "", email: "", category: "", priority: "", description: "" });
        screenshotRef.current.value = "";
        notesRef.current.value = "";
        setSteps([""]);
        setSuggestions([""]);
    };


    return (
        <form onSubmit={handleSubmit} className="card form-group">
            <h2 className="section-title">Submit Feedback</h2>


            <input className="input" placeholder="Full Name" name="name" value={form.name} onChange={handleChange} required />
            <input className="input" placeholder="Email" name="email" value={form.email} onChange={handleChange} required />


            <select className="input" name="category" value={form.category} onChange={handleChange} required>
                <option value="">Select Category</option>
                <option>Bug</option>
                <option>Suggestion</option>
                <option>Complaint</option>
                <option>Other</option>
            </select>


            <select className="input" name="priority" value={form.priority} onChange={handleChange} required>
                <option value="">Select Priority</option>
                <option>Low</option>
                <option>Medium</option>
                <option>High</option>
            </select>


            <textarea className="input" placeholder="Description" name="description" value={form.description} onChange={handleChange} required />


            <DynamicList title="Steps to Reproduce" items={steps} setItems={setSteps} />
            <DynamicList title="Suggested Improvements" items={suggestions} setItems={setSuggestions} />


            <input className="input" placeholder="Screenshot URL (optional)" ref={screenshotRef} />
            <textarea className="input" placeholder="Additional Notes (optional)" ref={notesRef} />


            <button className="btn">Submit</button>
        </form>
    );
}

export default FeedbackForm;