import React from 'react'
import AddPatient from '../components/AddPatient';
import PatientHeader from '../components/PatientHeader';
import PatientList from '../components/PatientList';


const Patient = () => {
    return (
        <div>
            <br/>
            <PatientHeader/>
            <br/>
            <AddPatient/>
            <br/>
            <PatientList/>
            <br/>
        </div>
    )
}

export default Patient
