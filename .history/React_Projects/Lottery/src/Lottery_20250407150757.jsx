import {useState} from 'react';
export default  function Lottery() {

let [ticket, setTicket] = useState(genTicket(3));
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