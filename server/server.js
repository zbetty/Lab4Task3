const express = require("express");
const cors = require("cors");
const app = express();
const dotenv = require("dotenv");
const { request, response } = require("express");

//So routes can conect to db
const pool = require("./dbconnect");

dotenv.config();

//middlewares
app.use(cors());
//allows us to access request.body from client side frontend
app.use(express.json());
app.use(express.urlencoded())


//ROUTES
app.get('/', (request, response) => {
    response.json({
        status: "Success, it's the main page",
        medical: "medical clinic"
    });
});

//Get all patient:
app.get("/patient", async (request, response) => {
    try {
        const getPatient = await pool.query("SELECT * FROM patient")

        response.json(getPatient.rows);
    }
    catch (error) {
        console.error(error.message);
    }
});

//Get all physician:
app.get("/physician", async (request, response) => {
    try {
        const getPhysician = await pool.query("SELECT * FROM physician")

        response.json(getPhysician.rows);
    }
    catch (error) {
        console.error(error.message);
    }
});

//Get all appointment:
app.get("/appointment", async (request, response) => {
    try {
        const getAppointment = await pool.query("SELECT * FROM appointment")

        response.json(getAppointment.rows);
    }
    catch (error) {
        console.error(error.message);
    }
});

//Get patient by id:
app.get("/patient/:id", async (request, response) => {
    try {
        const { id } = request.params;
        const getPatientByID = await pool.query('SELECT * FROM patient WHERE "ID" = $1', [id] 
        );
        response.json(getPatientByID.rows)
    }
    catch (error) {
        console.error(error.message);
    }
});

//Get physician by id:
app.get("/physician/:id", async (request, response) => {
    try {
        const { id } = request.params;
        const getPhysiciantByID = await pool.query('SELECT * FROM physician WHERE "npiID" = $1', [id] 
        );
        response.json(getPhysicianByID.rows)
    }
    catch (error) {
        console.error(error.message);
    }
});

//Get appointment by patientID:
app.get("/appointment/:id", async (request, response) => {
    try {
        const id = parseInt(request.params.id);
        const getAppointmentByID = await pool.query('SELECT * FROM appointment WHERE "patientID" = $1', [id] 
        );
        response.json(getAppointmentByID.rows)
    }
    catch (error) {
        console.error(error.message);
    }
});

//POST/Create patient
app.post("/patient", async (request, response) => {
    try {
        const { ID, firstName, lastName, DOB, sex, phoneNumber, streetAddress, city, state, zip } = request.body;
        const newPatient = await pool.query("INSERT INTO patient (ID, firstName, lastName, DOB, sex, phoneNumber, streetAddress, city, state, zip) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10) returning *",
            [ID, firstName, lastName, DOB, sex, phoneNumber, streetAddress, city, state, zip]
        );
        response.json(newPatient.rows[0]);
    }
    catch (error) {
        console.error(error.message);
    } 
});

//POST/Create physician
app.post("/physician", async (request, response) => {
    try {
        const { npiID, firstName, lastName, sex, phoneNumber, email, streetAddress, city, state, zip } = request.body;
        const newPhysician = await pool.query("INSERT INTO physician (npiID, firstName, lastName, sex, phoneNumber, email, streetAddress, city, state, zip) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10) returning *",
            [npiID, firstName, lastName, sex, phoneNumber, email, streetAddress, city, state, zip]
        );
        response.json(newPhysician.rows[0]);
    }
    catch (error) {
        console.error(error.message);
    } 
});

//POST/Create appointment
app.post("/appointment", async (request, response) => { 
    try {
        const { date, time, physicianID, patientID } = request.body;
        const newAppointment = await pool.query("INSERT INTO appointment (date, time, physicianID, patientID) VALUES ($1, $2, $3, $4) returning *",
            [date, time, physicianID, patientID]
        );
        response.json(newAppointment.rows[0]);
    }
    catch (error) {
        console.error(error.message);
    } 
    });

//Use PORT otherwise use port 5005
const PORT = process.env.PORT || 5005
app.listen(process.env.PORT, () => {
    console.log(`Server running on port: http://localhost:${PORT}`);
});