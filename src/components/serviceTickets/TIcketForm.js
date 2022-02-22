import React, { useState } from "react"
import { useHistory } from "react-router-dom";


export const TicketForm = () => {
    const [ticket, update] = useState({
        description: "",
        emergency: false
    });
    const history = useHistory()

    // const saveTicket = (event) => {
    //     event.preventDefault()
    // }
    const submitTicket = (evt) => {
        evt.preventDefault()
        const newTicket = {
            description:ticket.description,
            emergency:ticket.emergency,
            customerId: parseInt(localStorage.getItem("honey_customer")),
            employeeId: 1,
            dateCompleted: ""
        }

        const fetchOption = {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(newTicket)
        }
        return fetch("http://localhost:8088/serviceTickets", fetchOption)
            .then(() => {
                history.push("/tickets")


            })
    }

    return (
        <form className="ticketForm">
            <h2 className="ticketForm__title">New Service Ticket</h2>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="description">Description:</label>
                    <input
                        required autoFocus
                        type="text"
                        className="form-control"
                        placeholder="Brief description of problem"
                        onChange={
                            (evt) => {
                                const copy = {...ticket}
                                copy.description= evt.target.value
                                update(copy)
                            }
                                
                        }/>
                </div>
            </fieldset>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="name">Emergency:</label>
                    <input type="checkbox"
                    onChange={
                        (evt) => {
                            const copy = {...ticket}
                            copy.emergency= evt.target.checked
                            update(copy)
                        }
                    }
                        />
                </div>
            </fieldset>
            <button className="btn btn-primary" onClick={submitTicket}>
                Submit Ticket
            </button>
        </form>
    )
}