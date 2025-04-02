import {useState} from "react";
import {v4 as uuidv4 } from "uuid";
export default function ToDoList() {
  let [todos, setTodos] = useState([{task:"sample-task",id:uuidv4(), isDone:false}]);
  let [newTodo, setNewTodo] = useState("");

  let addnewTask = () =>{
  setTodos((prevTodos) => {
    return [...prevTodos, {task:newTodo, id:uuidv4(),isDone:false}];
  }); 
  setNewTodo("");
  }


  let updateTodoValue = (event ) => {
    setNewTodo(event.target.value);
  }

  let deleteTodo = (id)=>{
    setTodos((prevTodos) =>
       todos.filter((prevTodos) => 
        prevTodos.id != id));
  };

  let uppercaseAll = () =>{
    setTodos((prevTodos)=> 
     prevTodos.map((todo)=> {
      return {
        ...todo, 
        task: todo.task.toUpperCase(),
      };
     })
    )
  };

  let MarkAsAll = () =>{
    setTodos((prevTodos)=> 
     prevTodos.map((todo)=> {
      return {
        ...todo, 
        isDone:true,
      };
     })
    )
  };

  let UpperCaseOne = (id) => {
    setTodos((prevTodos)=> 
      prevTodos.map((todo)=> {
        if (todo.id == id) {
          return {
            ...todo, 
            task: todo.task.toUpperCase(),
          };
        }
       else {
          return todo;
       }
      })
     )
  }

  let MarkAsDone = (id) => {
    setTodos((prevTodos)=> 
      prevTodos.map((todo)=> {
        if (todo.id == id) {
          return {
            ...todo, 
            isDone:true,
          };
        }
       else {
          return todo;
       }
      })
     )
  }



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
          <span style={todo.isDone ? {textDecorationLine:"line-through"}: {}}>
          {todo.task}
          </span>
          &nbsp;&nbsp;&nbsp;
          <button onClick={() =>deleteTodo(todo.id)}>Delete</button>
          &nbsp;&nbsp;&nbsp;
          <button onClick={() =>UpperCaseOne(todo.id)}>UpeerCase One</button>
          &nbsp;&nbsp;&nbsp;
          <button onClick={() =>MarkAsDone(todo.id)}>Mark As Done</button>
          </li>
        ))}
      </ul>
      <br></br> <br></br>
      <button onClick={uppercaseAll}>Uppercase All</button>
      &nbsp;&nbsp;&nbsp;
      <button onClick={MarkAsAll}>Mark As Done All</button>
      
    </div>
  );
}