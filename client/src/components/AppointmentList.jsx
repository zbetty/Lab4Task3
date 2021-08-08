import React, {useEffect, useState} from 'react'


const AppointmentList = () => {
    const [appointments, setAppointments] = useState([]);

    async function getAppointments() {
        const res = await fetch("/appointment");

        const appointmentsArray = await res.json();

        setAppointments(appointmentsArray)
    }
    useEffect(() => {
        getAppointments();
    }, []);
    console.log(appointments);

    return (
        <div className="container list-group">
        <table className="table table-striped">
            <thead className="bg-success">
                <tr>
                    <th scope="col">Date</th>
                    <th scope="col">Time</th>
                    <th scope="col">Physician ID</th>
                    <th scope="col">Patient ID</th>
                </tr>
            </thead>
            <tbody>
                {appointments.map((elm) => {
                    return (
                        <tr>
                            <td>{elm.date}</td>
                            <td>{elm.time}</td>
                            <td>{elm.physicianID}</td>
                            <td>{elm.patientID}</td>
                        </tr>
                    );
                })}
            </tbody>
        </table>
    </div>
    )
}

export default AppointmentList
