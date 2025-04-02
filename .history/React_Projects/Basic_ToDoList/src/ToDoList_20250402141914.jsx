import {useState} from "react";
export default function ToDoList() {
  let [todos, setTodos] = useState(["sample Task"]);
  let [newTodo, setNewTodo] = useState("");

  let addnewTask = () =>{
  setTodos([...todos, newTodo]);
  setNewTodo("");
  }

  let updateTodoValue = (event ) => {
    setNewTodo(event.target.value);
  }


  return (
    <div>
      <input type = "text" placeholder = "Add a new task" value ={newTodo} onChange= {updateTodoValue}/>

 <br/><br/>
      <button onClick={addnewTask}>Add Task </button>
      <br/>
      <br/>
      <br/>
      <hr/>
      <h4>Tasks Todo</h4>
      <ul>
      {
        todos.map ((todo)=> (
          <li>{todo}</li>
        ))}
      </ul>

    </div>
  );
}