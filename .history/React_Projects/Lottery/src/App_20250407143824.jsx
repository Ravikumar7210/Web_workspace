import { useState } from 'react'
import Lottery from './Lottery'
import './App.css'

function App() {

   let [ticket, setTicket] = useState([0,0,0]);
  return (
    <>
    <div>
    <h1>Lottery Game!</h1>
    <div className='ticket'>
    <span>{ticket[0]} </span>
    <span>{ticket[1]} </span>
    <span>{ticket[2]} </span>
    
    </div>
    </div>
      
    </>
  )
}

export default App
