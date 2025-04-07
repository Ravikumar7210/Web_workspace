import {useState} from 'react';
import { genTicket } from './helper';
export default  function Lottery() {

let [ticket, setTicket] = useState(genTicket);
return (
<div>
 <h1>Lottery Game!</h1>
  <div className='ticket'>
   <span >{ticket[0]}</span>
   <span>{ticket[1]}</span>
   <span>{ticket[2]}</span>
  </div>
</div>
);

}