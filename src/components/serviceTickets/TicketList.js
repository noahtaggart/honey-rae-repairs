import React, { useEffect, useState } from "react"
import { useHistory } from "react-router-dom"

export const TicketList = () => {
    const [tickets, changeTicket] = useState([])
    const history = useHistory()
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
                        return <p className={ticket.emergency ? `ticket-emergency` : `ticket`}>
                        {ticket.emergency ? "🚑" : ""} {ticket.description} submitted by {ticket.customer.name} and worked on by {ticket.employee.name}
                    </p>
                    }
                )
            }
        </>
    )
}