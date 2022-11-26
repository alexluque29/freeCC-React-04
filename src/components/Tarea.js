import "../styles/Tarea.css";
import { AiOutlineCloseCircle } from "react-icons/ai";

const Tarea = ({ id, text, completada, createTask, deleteTask }) => {
  return (
    <div
      className={completada ? "todo-container completada" : "todo-container"}
    >
      <div className="todo-text" onClick={() => createTask(id)}>
        {text}
      </div>
      <div className="todo-icon-container" onClick={() => deleteTask(id)}>
        <AiOutlineCloseCircle className="todo-icon" />
      </div>
    </div>
  );
};

export default Tarea;
