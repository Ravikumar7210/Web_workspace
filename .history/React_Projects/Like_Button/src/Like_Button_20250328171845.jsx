import "./App.css";
import { useState } from "react";


export default function LikeButton() {
let [isLiked, setIsLiked] = useState(false);
let toogleLike = () =>{
    setIsLiked(!isLiked);
};


    return (
    <div>
        <p onClick= {clicked}>
        <i className="fa-regular fa-heart"></i> 
        
        </p>
     </div>
    );
}