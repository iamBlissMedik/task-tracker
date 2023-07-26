import PropTypes from "prop-types";
import { FaTimes } from "react-icons/fa";
const Task = ({ task, onDelete, onToggle }) => {
  const deleteTask = (id) => onDelete(task.id);
  const toggle = (id) => onToggle(task.id);

  return (
    <div
      className={`task ${task.reminder ? "reminder" : ""}`}
      onDoubleClick={toggle}
    >
      <h3>
        {task.text}{" "}
        <FaTimes
          style={{ color: "red", cursor: "pointer" }}
          onClick={deleteTask}
        />
      </h3>
      <p>{task.day}</p>
    </div>
  );
};
Task.propTypes = {
  task: PropTypes.object.isRequired,
};
export default Task;
