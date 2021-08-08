const dotevn = require('dotenv');
const { Pool } = require('pg');
dotevn.config();

const pool = new Pool({
    user: process.env.PGUSER,
    host: process.env.PGHOST,
    port: process.env.PGPORT,
    database: process.env.PGDATABASE
});


module.exports = pool;