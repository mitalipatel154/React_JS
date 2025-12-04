import React from "react";
import FeedbackCard from "../Component/FeedbackCard";


function FeedbackList({ feedbacks }) {
    return (
        <div>
            <h2 className="section-title">Submitted Feedback</h2>
            <div className="grid-list">
                {feedbacks.map((fb, index) => (
                    <FeedbackCard key={index} data={fb} />
                ))}
            </div>
        </div>
    );
}

export default FeedbackList;