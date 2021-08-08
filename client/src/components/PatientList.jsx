import React, { useEffect, useState} from 'react'


const PatientList = () => {
    const [patients, setPatients] = useState([]);

    async function getPatients() {
        const res = await fetch("/patient");

        const patientsArray = await res.json();

        setPatients(patientsArray)
    }
    useEffect(() => {
        getPatients();
    }, []);
    console.log(patients);

    return (
        <div className="container list-group">
            <table className="table table-striped">
                <thead className="bg-success">
                    <tr>
                        <th scope="col">PatientID</th>
                        <th scope="col">First Name</th>
                        <th scope="col">Last Name</th>
                        <th scope="col">DOB</th>
                        <th scope="col">Sex</th>
                        <th scope="col">Phone Number</th>
                        <th scope="col">Street Address</th>
                        <th scope="col">City</th>
                        <th scope="col">State</th>
                        <th scope="col">Zip</th>
                    </tr>
                </thead>
                <tbody>     
                    {patients.map((elm) => {
                        return (
                            <tr>
                                <td>{elm.ID}</td>
                                <td>{elm.firstName}</td>
                                <td>{elm.lastName}</td>
                                <td>{elm.DOB}</td>
                                <td>{elm.sex}</td>
                                <td>{elm.phoneNumber}</td>
                                <td>{elm.streetAddress}</td>
                                <td>{elm.city}</td>
                                <td>{elm.state}</td>
                                <td>{elm.zip}</td>
                            </tr>
                        );
                    })}
                </tbody>
            </table>
        </div>
    )
}

export default PatientList
