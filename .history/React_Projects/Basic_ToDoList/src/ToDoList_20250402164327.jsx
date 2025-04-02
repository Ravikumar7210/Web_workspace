import {useState} from "react";
import {v4 as uuidv4 } from "uuid";
export default function ToDoList() {
  let [todos, setTodos] = useState([{task:"sample-task",id:uuidv4()}]);
  let [newTodo, setNewTodo] = useState("");

  let addnewTask = () =>{
  setTodos((prevTodos) => {
    return [...prevTodos, {task:newTodo, id:uuidv4()}];
  }); 
  setNewTodo("");
  }


  let updateTodoValue = (event ) => {
    setNewTodo(event.target.value);
  }

  let deleteTodo = (id)=>{
    setTodos((prevTodos) => todos.filter((prevTodos) => prevTodos.id != id));
  };

  let uppercaseAll = () =>{
    setTodos((prevTodos)=> {
     prevTodos.map((todo)=> {
      return {
        ...prevTodos, task: todo.task.toUpperCase(),
      };
     })
    })
  };

  return (
    <div>
      <input type = "text" placeholder = "Add a new task" value ={newTodo} onChange= {updateTodoValue}/>

 <br/><br/>
      <button onClick={addnewTask}>Add Task </button>
      <br/><br/><br/>
      <hr/>
      <h4>Tasks Todo</h4>
      <ul>
      {
        todos.map ((todo)=> (
          <li key= {todo.id}>
          <span>{todo.task}</span>
          &nbsp;&nbsp;&nbsp;
          <button onClick={() =>deleteTodo(todo.id)}>Delete</button>
          </li>
        ))}
      </ul>
      <br></br> <br></br>
      <button onClick={uppercaseAll}>Uppercase All</button>
    </div>
  );
}