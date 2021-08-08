import React from 'react'
import AddAppointment from '../components/AddAppointment'
import AppointmentHeader from '../components/AppointmentHeader'
import AppointmentList from '../components/AppointmentList'

const Appointment = () => {
    return (
        <div>
            <br/>
            <AppointmentHeader/>
            <br/>
            <AddAppointment/>
            <br/>
            <AppointmentList/>
        </div>
    )
}

export default Appointment
