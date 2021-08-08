import React from 'react'


const HomeButtons = () => {
    return (
        <div>
            <div className="col text-center">
                <form action="/patient">
                <button className="text center submit-button btn btn-primary btn-lg">
                    To Patient Records
                    </button>
                </form>
            </div>
            <br/>
            <br/>
            <div className="col text-center">
            <form action="/appointment">
                <button className="text center submit-button btn btn-primary btn-lg">
                    To Appointment Records
                </button>
            </form>
            </div>
            <br/>
            <br/>
                <div className="col text-center">
                <form action="/physician">
                    <button className="text center submit-button btn btn-primary btn-lg">
                        To Physician Records
                    </button>
                </form>
            </div>
        </div>
    )
}

export default HomeButtons
