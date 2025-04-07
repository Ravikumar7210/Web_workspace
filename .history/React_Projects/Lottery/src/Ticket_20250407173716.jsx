import TicketNum from "./TicketNum";

export default function Ticket({ticket}) {

    return (
        <div>
        {ticket.map((Num, idx) =>(
            <TicketNum num={num} />
        )}
        </div>
        );
}