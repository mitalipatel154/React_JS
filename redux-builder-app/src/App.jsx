import { useState } from "react";
import AddTask from "./components/AddTask";
import TaskList from "./components/TaskList";
import './App.css'

function App() {
  const [editIndex, setEditIndex] = useState(null);
  const [editValue, setEditValue] = useState("");

  const handleEdit = (index, value) => {
    setEditIndex(index);
    setEditValue(value);
  };

  const clearEdit = () => {
    setEditIndex(null);
    setEditValue("");
  };

  return (
    <div className="app-container">
      <div className="task-card">
        <h2>Task Manager</h2>

        <AddTask
          editIndex={editIndex}
          editValue={editValue}
          clearEdit={clearEdit}
        />

        <TaskList onEdit={handleEdit} />
      </div>
    </div>
  );
}

export default App;
