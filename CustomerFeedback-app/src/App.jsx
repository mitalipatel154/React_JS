import React, { useState } from "react";
import FeedbackForm from "../src/Component/FeedbackForm";
import FeedbackList from "../src/Component/FeedbackList";
import './App.css'


function App() {
  const [feedbacks, setFeedbacks] = useState([]);


  const addFeedback = (data) => {
    setFeedbacks([...feedbacks, data]);
  };


  return (
    <div className="container">
      <h1 className="title">Customer Feedback System</h1>
      <FeedbackForm onSubmitFeedback={addFeedback} />
      <FeedbackList feedbacks={feedbacks} />
    </div>
  );
}

export default App;