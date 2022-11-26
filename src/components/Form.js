import "../styles/Form.css";
import { useState } from "react";
import { v4 as uuidv4 } from "uuid";

const Form = (props) => {
  const [input, setTnput] = useState("");

  const onChangeInput = (e) => {
    setTnput(e.target.value);
  };

  const onSendInput = (e) => {
    e.preventDefault();

    const newTask = {
      id: uuidv4(),
      text: input,
      completada: false,
    };
    props.onSubmit(newTask);
  };

  return (
    <form className="todo-form" onSubmit={onSendInput}>
      <input
        className="todo-input"
        type="text"
        placeholder="Write a task"
        name="text"
        onChange={onChangeInput}
      />
      <button className="todo-button">Add Task</button>
    </form>
  );
};

export default Form;
