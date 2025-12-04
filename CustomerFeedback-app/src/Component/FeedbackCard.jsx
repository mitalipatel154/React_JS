import React from "react";

function FeedbackCard({ data }) {
    return (
        <div className="card">
            <h3 className="name">{data.name}</h3>
            <p className="email">{data.email}</p>


            <div className="badge-row">
                <span className="badge blue">{data.category}</span>
                <span className="badge red">{data.priority}</span>
            </div>


            <p className="description">{data.description}</p>


            {data.screenshot && (
                <img src={data.screenshot} alt="preview" className="image" />
            )}


            <h4>Steps:</h4>
            <ul>
                {data.steps.map((s, i) => <li key={i}>{s}</li>)}
            </ul>


            <h4>Suggestions:</h4>
            <ul>
                {data.suggestions.map((s, i) => <li key={i}>{s}</li>)}
            </ul>


            <p className="time">{data.time}</p>
        </div>
    );
}

export default FeedbackCard;