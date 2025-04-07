import {useState} from 'react';
import "./Lottery.css"
import helpers from './helpers.js'
export default  function Lottery() {

let [ticket, setTicket] = useState([0,0,0]);
return (
<div>
<h1>Lottery Game!</h1>
<div className='ticket'>
<span >{ticket[0]}</span>
<span>{ticket[0]}</span>
<span>{ticket[0]}</span>
</div>
</div>
);

}