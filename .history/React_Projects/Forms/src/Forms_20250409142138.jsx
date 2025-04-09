import { useState } from "react"
export default function Forms() {

   let [formData, setformData]= useState({
    fullName: "",
    userName: "",
    password: "",
   });

    let handleInputChange  = (event) => {
       setformData ((currData) => {
        return {...currData, [event.target.name]: event.target.value}
       });
    };

    let handleSubmit = (event) => {
        event.preventDefault();
        console.log(formData);
        setformData({
            fullName: "",
            userName: "",
            password: "",
        });

    }


    return (
        <div>
           <form> 
           <label>Enter your name:</label> &nbsp;&nbsp;&nbsp;
           <input type="text" placeholder="Enter your name" value={fullName}  onChange={handleNameChange} id="username"/> 
           &nbsp;&nbsp;&nbsp;
           <button >Submit</button>
         </form>
        </div>
    );
}