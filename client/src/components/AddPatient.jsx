import React, {useState} from 'react'

const AddPatient = () => {
    const [patient, setPatient] = useState("");

    const onSubmitForm = async (e) => {
        //prevent refresh
        e.preventDefault();
        try {
            const body = { patient };
            const response = await fetch("/patient", {
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
                        <input type="text" placeholder="Patient ID"/>
                    </span>
                    <span className="col">
                        <input type="text" placeholder="First Name"/>
                    </span>
                    <span className="col">
                        <input type="text" placeholder="Last Name"/>
                    </span>
                    <span className="col">
                        <input type="text" placeholder="DOB: MM/DD/YY"/>
                    </span>
                    <span className="col">
                        <input type="text" placeholder="Sex"/>
                    </span>
                </div>
                <div className="container text-center">
                    <span className="col">
                        <input type="text" placeholder="Tel: 111-111-1111"/>
                    </span>
                    <span className="col">
                        <input type="text" placeholder="Street Address"/>
                    </span>
                    <span className="col">
                        <input type="text" placeholder="City"/>
                    </span>
                    <span className="col">
                        <input type="text" placeholder="State"/>
                    </span>
                    <span className="col">
                        <input type="integer" placeholder="Zip Code"/>
                    </span> 
                </div>
                <div className="col text-center"> 
                    <button type="button" className="btn btn-primary">Add Patient</button>
                </div>
            </form>
        </div>
    )
}

export default AddPatient
