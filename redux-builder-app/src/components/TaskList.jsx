import { useDispatch, useSelector } from "react-redux";
import { deleteTask } from "../features/tasks/taskSlice";

function TaskList({ onEdit }) {
  const tasks = useSelector((state) => state.tasks.list);
  const dispatch = useDispatch();

  return (
    <ul className="task-list">
      {tasks.map((task, index) => (
        <li key={index} className="task-item">
          <span>{task}</span>

          <div className="task-actions">
            <button onClick={() => onEdit(index, task)} className="edit-btn">
              Edit
            </button>
            <button
              onClick={() => dispatch(deleteTask(index))}
              className="delete-btn"
            >
              Delete
            </button>
          </div>
        </li>
      ))}
    </ul>
  );
}

export default TaskList;
