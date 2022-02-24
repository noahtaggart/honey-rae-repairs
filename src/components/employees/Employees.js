import React, { useEffect, useState } from "react"
import { useParams } from "react-router-dom"

export const Employees = () => {
    const [employee, set] = useState({})  // State variable for current employee object
    const { employeeId } = useParams()  // Variable storing the route parameter

    useEffect(
        () => {
            fetch(`http://localhost:8088/employees/${employeeId}?_expand=location`)
                .then(res => res.json())
                .then(set)
        },
        [ employeeId ]  // Above function runs when the value of employeeId change
    )

    return (
        <>
            <section className="employee">
                <h3 className="employee__name">{employee.name}</h3>
                <div className="employee__specialty">Specializes in {employee.specialty}</div>
                <div className="employee__location">works at the {employee.location?.name}</div>
            </section>
        </>
    )
}

