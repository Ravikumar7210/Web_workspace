import {useState} from "react";
export default function ToDoList() {
  let [todos, setTodos] = useState(["sample Task"]);
  let [newTodo, setNewTodo] = useState("");

  let addnewTask = () =>{
  console.log("we have to add new task in todo");
  }


  return (
    <div>
      <input type = "text" placeholder = "Add a new task" value ={newTodo}/>

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