import React, {useState} from 'react'

const AddAppointment = () => {
    const [appointment, setAppointment] = useState("");

    const onSubmitForm = async (e) => {
        //prevent refresh
        e.preventDefault();
        try {
            const body = { appointment };
            const response = await fetch("/appointment", {
                method: "POST",
                headers: {"Content-Type": "application/json"},
                body: JSON.stringify(body),
            });
            window.location = "/";
        }
        catch (error) {
            console.error(error.message);
        }
    };

    return (
        <div>
            <form onSubmit={onSubmitForm}>
                <div className="container text-center" >
                    <span className="col">
                        <input type="text" placeholder="Date: YYYY-MM-DD"/>
                    </span>
                    <span className="col">
                        <input type="text" placeholder="Time: HH:MM:SS"/>
                    </span>
                    <span className="col">
                        <input type="text" placeholder="Physician npiID"/>
                    </span>
                    <span className="col">
                        <input type="text" placeholder="Patient ID"/>
                    </span>
                </div>
                <div className="col text-center"> 
                    <button type="button" className="btn btn-primary">Add Appointment</button>
                </div>
            </form>
        </div>
    )
}

export default AddAppointment
