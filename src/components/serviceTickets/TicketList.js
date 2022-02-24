import React, { useEffect, useState } from "react"
import { Link, useHistory } from "react-router-dom"

export const TicketList = () => {
    const [tickets, changeTicket] = useState([])
    const history = useHistory()


    const deleteTicket = (id) => {
        fetch(`http://localhost:8088/serviceTickets/${id}`, {
            method: "DELETE"
        })
        //makes a copy of tickets with id's that do NOT 
        //equal the id being passed through the function
        const copy = tickets.filter(ticket => {
            return ticket.id != id
        })
        changeTicket(copy)
    }
    useEffect(
        () => {
            fetch("http://localhost:8088/serviceTickets?_expand=customer&_expand=employee")
                .then(res => res.json())
                .then((data) => {
                    changeTicket(data)
                })
        },
        []
    )



    return (
        <>
            <button onClick={() => history.push("/tickets/create")}>Create Ticket</button>
            {
                tickets.map(
                    (ticket) => {
                        return <p key={`ticket-- ${ticket.id}`} className={ticket.emergency ? `ticket-emergency` : `ticket`}>
                            {ticket.emergency ? "🚑" : ""} <Link to={`/tickets/${ticket.id}`}>{ticket.description}</Link> submitted by {ticket.customer.name} and worked on by {ticket.employee.name}. 
                            <button onClick={() => {
                                deleteTicket(ticket.id)
                            }}>Delete</button></p>
                            
                        
                    }
                )
            }
        </>
    )
}