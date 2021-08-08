import React from 'react'
import PhysicianHeader from '../components/PhysicianHeader'
import PhysicianList from '../components/PhysicianList'
import AddPhysician from '../components/AddPhysician'


const physician = () => {
    return (
        <div>
            <br/>
            <PhysicianHeader/>
            <br/>
            <AddPhysician/>
            <br/>
            <PhysicianList/>
        </div>
    )
}

export default physician
