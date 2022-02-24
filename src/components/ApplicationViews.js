import React from "react";
import { Route } from "react-router-dom"
import { CustomerList } from "./customers/CustomerList";
import { EmployeeForm } from "./employees/EmployeeForm";
import { EmployeeList } from "./employees/EmployeeList";
import { TicketForm } from "./serviceTickets/TIcketForm";
import { TicketList } from "./serviceTickets/TicketList";
import { Ticket } from "./serviceTickets/Tickets";

export const ApplicationViews = () => {
    return (
        <>

            <Route exact path="/customers">
                <CustomerList />
            </Route>

            <Route exact path="/employees">
                <EmployeeList />
            </Route>

            <Route path="/employees/create">
                <EmployeeForm />
            </Route>

            <Route exact path="/tickets">
                <TicketList />
            </Route>

            <Route path="/tickets/create">
                <TicketForm />
            </Route>
            <Route exact path="/tickets/:ticketId(\d+)">
                <Ticket />
            </Route>


        </>
    )
}