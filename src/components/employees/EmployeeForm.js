import React, { useState } from "react"
import { useHistory } from "react-router-dom";


export const EmployeeForm = () => {
    const [employee, update] = useState({
        name: "",
        specialty: "",
        locationId: null
    });
    const [employeeLocation, updateLocation] = useState([])


    useEffect(() => {
        const specialties = employees.map(employee => employee.specialty)
        updateSpecialties(specialties.join(", "))


    const history = useHistory()

    // const saveemployee = (event) => {
    //     event.preventDefault()
    // }
    const submitEmployee = (evt) => {
        evt.preventDefault()



        const newEmployee = {
            name: employee.name,
            specialty: employee.specialty,
            locationId: document.querySelector("input[name=location]").value
            
        }

        const fetchOption = {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(newEmployee)
        }
        return fetch("http://localhost:8088/employees?_expand=location", fetchOption)
            .then(() => {
                history.push("/employees")


            })
    }


    return (
        <form className="employeeForm">
            <h2 className="employeeForm__title">New Employee</h2>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="description">Employee Name:</label>
                    <input
                        required autoFocus
                        type="text"
                        className="form-control"
                        placeholder="Full Name"
                        onChange={
                            (evt) => {
                                const copy = {...employee}
                                copy.name= evt.target.value
                                update(copy)
                            }
                                
                        }/>
                </div>
            </fieldset>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="name">Specialty</label>
                    <input type="text"
                    required autoFocus
                    className="form-control"
                    placeholder="Specialty"
                    onChange={
                        (evt) => {
                            const copy = {...employee}
                            copy.specialty= evt.target.value
                            update(copy)
                        }
                    }
                        />
                </div>
            </fieldset>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="name">Location</label>
                    <select name="location" type="select"
                    onChange={
                        (evt) => {
                            const copy = {...employee}
                            copy.locationId= evt.target.value
                            update(copy)
                        }
                    }>

                    </select>

                </div>
            </fieldset>
            <button className="btn btn-primary" onClick={submitEmployee}>
                Submit employee
            </button>
        </form>
    )
}