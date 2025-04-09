import { useState } from "react";

export default function Forms() {


    let [fullName, setfullName] = useState("");

    let handleNameChange  = (event) => {
        console.log(event.target.value);
    }

    return (
        <div>
        <form>
        <input placeholder="enter your full name" type="text" value={fullName} onChange={handleNameChange}>  </input>
        <button >Submit</button>
        </form>
        </div>
    );
}