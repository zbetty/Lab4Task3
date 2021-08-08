import React, { useEffect, useState} from 'react'


const PhysicianList = () => {
    const [physicians, setPhysicians] = useState([]);

    async function getPhysicians() {
        const res = await fetch("/physician");

        const physiciansArray = await res.json();

        setPhysicians(physiciansArray)
    }
    useEffect(() => {
        getPhysicians();
    }, []);
    console.log(physicians);

    return (
        <div className="container list-group">
        <table className="table table-striped">
            <thead className="bg-success">
                <tr>
                    <th scope="col">npiID</th>
                    <th scope="col">First Name</th>
                    <th scope="col">Last Name</th>
                    <th scope="col">Sex</th>
                    <th scope="col">Phone Number</th>
                    <th scope="col">E-Mail</th>
                    <th scope="col">Street Address</th>
                    <th scope="col">City</th>
                    <th scope="col">State</th>
                    <th scope="col">Zip</th>
                </tr>
            </thead>
            <tbody>
                {physicians.map((elm) => {
                    return (
                        <tr>
                            <td>{elm.npiID}</td>
                            <td>{elm.firstName}</td>
                            <td>{elm.lastName}</td>
                            <td>{elm.sex}</td>
                            <td>{elm.phoneNumber}</td>
                            <td>{elm.email}</td>
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

export default PhysicianList
