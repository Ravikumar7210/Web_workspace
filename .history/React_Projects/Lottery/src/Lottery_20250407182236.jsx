import {useState} from 'react';
import { genTicket} from './helper';
import Ticket from "./Ticket"
import Button from './Button';
export default  function Lottery({n ,winCondition}) {

let [ticket, setTicket] = useState(genTicket(n));
let isWinning = winCondition(ticket);

let buyTicket = () => {
    setTicket(genTicket(n));
} ;

return (
<div>
 <h1>Lottery Game!</h1>
   <Ticket ticket={ticket}/> 
  <button onClick={buyTicket}>Buy New Ticket </button>
  <h3> {isWinning && "Congratulations, You won!"}</h3>
</div>
);

}