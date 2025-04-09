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
            passWord: "",
        });

    }


    return (
           <form onSubmit={handleSubmit}> 
           <label htmlFor="fullName">Full Name:</label> &nbsp;&nbsp;&nbsp;
           <input type="text" placeholder="Enter Fullname" value={formData.fullName} 
            onChange={handleInputChange} id="fullName" name="fullName"/>

          <br/><br/>
           <label htmlFor="userName">User Name:</label> &nbsp;&nbsp;&nbsp;
           <input type="text" placeholder="Enter Username" value={formData.userName}  onChange={handleInputChange} id="userName" name="userName"/> 
           <br/><br/>
           <label htmlFor="passWord">Password:</label> &nbsp;&nbsp;&nbsp;
           <input type="text" placeholder="Password" value={formData.passWord}  onChange={handleInputChange} id="passWord" name="passWord"/> 
           <button >Submit</button>
         </form>
  
    );
}