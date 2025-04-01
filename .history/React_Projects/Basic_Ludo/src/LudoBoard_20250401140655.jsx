export {useState} from 'react';
export default function LudoBoard(){

    let [moves, setMoves] = useState(0);
    return (
        <div>
        <p>Game Begins</p>
        <div className= "board">
        <p>Blue moves</p>
        <button>+1</button>
        <p>Yellow moves</p>
        <button>+1</button>
        <p>Green moves</p>
        <button>+1</button>
        <p>Red moves</p>
        <button>+1</button>
        </div>
        </div>
    );
}