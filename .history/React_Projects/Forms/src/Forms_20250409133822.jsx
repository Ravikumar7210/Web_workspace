import { useState } from "react";

export default function Forms() {



    return (
        <div>
        <form>
        <input placeholder="enter your full name" type="text" value={fullName} onChange={handleNameChange}>  </input>
        <button >Submit</button>
        </form>
        </div>
    );
}