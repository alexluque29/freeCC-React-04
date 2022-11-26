import "./App.css";
import logo from "./images/freecodecamp.svg";
import { TodoList } from "./components/TodoList";

function App() {
  return (
    <div className="App">
      <div className="logo-container">
        <img className="logo" src={logo} alt="logo-fcc" />
      </div>
      <div className="todo-main">
        <h1>To-do List</h1>
        <TodoList />
      </div>
    </div>
  );
}

export default App;
