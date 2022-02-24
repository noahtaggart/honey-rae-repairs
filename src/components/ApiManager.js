export const getAllCustomers = () => {
    return fetch("http://localhost:8088/customers")
        .then(res => res.json())
}

export const getAllEmployees = () => {
    return fetch("http://localhost:8088/employees")
                .then(res => res.json())
}

export const getAllLocations = () => {
    return fetch("http://localhost:8088/locations")
            .then(response => response.json())
}


export const getAllTickets = () => {
    fetch("http://localhost:8088/serviceTickets?_expand=customer&_expand=employee")
                .then(res => res.json())
}