import React, { useEffect, useState } from "react"
import { getAllCustomers } from "../ApiManager"

export const CustomerList = () => {
    const [customers, setCustomers] = useState([])
    const [message, updateMessage] = useState("")

    useEffect(
        () => {
            getAllCustomers()
                .then(
                (customers) => {
                    setCustomers(customers)
                })
        },
        []
    )

    useEffect(
        () => {
            if (customers.length === 1) {
                updateMessage("You have 1 customer")

            } else {
                updateMessage(`You have ${customers.length} customers`)
            }

        },
        [customers]
    )

    return (
        <>
        <p>{message}</p>
            {
                customers.slice(0, 5 ).map(
                    (customerObject) => {
                        return <p key={`customer--${customerObject.id}`}>{customerObject.name}</p>
                    }
                )
            }
        </>
    )
}