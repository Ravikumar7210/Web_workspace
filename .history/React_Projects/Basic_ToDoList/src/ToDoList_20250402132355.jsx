import {useState} from "react";
export default function ToDoList() {
  let [todos, setTodos] = useState(["sample Task"]);
  return (
    <div>
      <input type="text" placeholder="Add a new task" />

 <br/><br/>
      <button>Add Task </button>
      <br/>
      <br/>
      <br/>
      <hr/>
      <h4>Tasks Todo</h4>
      <ul>
      {
        todos.map ((todo)=> (
          <li>
          {todo}
          </li>
        ))}
      </ul>

    </div>
  );
}