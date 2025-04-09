import { useState } from "react"
export default function Forms() {

    let [fullName, setfullName] = useState("");

    let handleNameChange  = (event) => {
        console.log(event.target.value);
    }


    return (
        <div>
           <form> <input type="text" placeholder="Enter your name" value={fullName}  onChange={handleNameChange}/> 
           &nbsp;&nbsp;&nbsp;
           <button >Submit</button>
         </form>
        </div>
    );
}