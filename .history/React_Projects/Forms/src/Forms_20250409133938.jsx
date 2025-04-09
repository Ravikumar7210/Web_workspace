import { useState } from "react";

export default function Forms() {



    return (
        <div>
            <h1>Forms</h1>
            <form>
                <label htmlFor="name">Name:</label>
                <input type="text" id="name" name="name" required />

                <label htmlFor="email">Email:</label>
                <input type="email" id="email" name="email" required />

                <label htmlFor="password">Password:</label>
                <input type="password" id="password" name="password" required />

                <button type="submit">Submit</button>
            </form> 
        </div>
    );
}