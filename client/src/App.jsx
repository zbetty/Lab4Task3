import React, { Fragment } from 'react';
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Home from "./routes/Home";
import Physician from "./routes/Physician";
import Patient from "./routes/Patient";
import Appointment from "./routes/Appointment";


const App = () => {
    return (   
        <Fragment>
            <div>
                <Router>
                    <Switch>
                        <Route exact path="/" component={Home} />    
                        <Route exact path="/patient" component={Patient} />    
                        <Route exact path="/physician" component={Physician} />
                        <Route exact path="/appointment" component={Appointment} />
                    </Switch>
                </Router>
            </div>
        </Fragment>
    );
};

export default App;