
import { useDispatch } from "react-redux";
import { addTask, updateTask } from "../features/tasks/taskSlice";
import { useState, useEffect } from "react";

function AddTask({ editIndex, editValue, clearEdit }) {
  const [task, setTask] = useState("");
  const dispatch = useDispatch();

  useEffect(() => {
    if (editIndex !== null) {
      setTask(editValue);
    }
  }, [editIndex]);

  const handleSubmit = () => {
    if (task.trim() === "") return;

    if (editIndex === null) {
      dispatch(addTask(task));
    } else {
      dispatch(updateTask({ index: editIndex, newTask: task }));
      clearEdit(); 
    }

    setTask("");
  };

  return (
    <>
      <input
        type="text"
        placeholder="Enter task..."
        value={task}
        onChange={(e) => setTask(e.target.value)}
        className="task-input"
      />

      <button onClick={handleSubmit} className="primary-btn">
        {editIndex === null ? "Add Task" : "Update Task"}
      </button>
    </>
  );
}

export default AddTask;