import "./App.css";


export default function LikeButton() {


    let clicked = () => {
        console.log("clicked");

    };


    return (
    <div>
        <p onClick= {clicked}>
        <i class="fa-regular fa-heart"></i> 
        
        </p>
     </div>
    );
}