export { useState } from 'react';
export default function LudoBoard(){

    let [moves, setMoves] = useState({blue:0, red:0, yelllow:0, green:0});
    
    return (
        <div>
        <p>Game Begins</p>
        <div className= "board">
        <p>Blue moves = {moves.blue}</p>
        <button style= "">+1</button>
        <p>Yellow moves = {moves.blue}</p>
        <button>+1</button>
        <p>Green moves  = {moves.blue}</p>
        <button>+1</button>
        <p>Red moves  = {moves.blue}</p>
        <button>+1</button>
        </div>
        </div>
    );
}