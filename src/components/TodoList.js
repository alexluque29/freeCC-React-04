import Form from "./Form";
import "../styles/TodoList.css";
import { useState } from "react";
import Tarea from "./Tarea";

export const TodoList = () => {
  const [task, setTask] = useState([]);

  const addTask = (tarea) => {
    if (tarea.text.trim()) {
      tarea.text = tarea.text.trim();

      const current = [tarea, ...task];
      setTask(current);
    }
  };

  const deleteTask = (id) => {
    const current = task.filter((tarea) => tarea.id !== id);
    setTask(current);
  };

  const createTask = (id) => {
    const current = task.map((tarea) => {
      if (tarea.id === id) {
        tarea.completada = !tarea.completada;
      }
      return tarea;
    });
    setTask(current);
  };

  return (
    <>
      <Form onSubmit={addTask} />
      <div className="todo-list-container">
        {task.map((task) => (
          <Tarea
            key={task.id}
            id={task.id}
            text={task.text}
            completada={task.completada}
            createTask={createTask}
            deleteTask={deleteTask}
          />
        ))}
      </div>
    </>
  );
};
