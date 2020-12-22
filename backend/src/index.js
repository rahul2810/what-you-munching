const Pool = require('pg').Pool;
const express = require('express');
const db = require('./db');
const cors = require('cors');
const app = express();

const port = 3000;

const pool = new Pool({
    user: db.user,
    host: db.host,
    database: db.database,
    password: db.password,
    port: db.port,
});

//get all munch it data
const getMunchit = (request, response) => {
    pool.query('SELECT * FROM munchit', (error, results) => {
      if (error) {
        throw error
      }
      response.status(200).json(results.rows)
    })
  };

//Add new munchIt Data

const postMunchit = (request, response) => {
    const { username, location, favouritefood, foodlink } = request.body;
    pool.query('INSERT INTO munchit (username, location, favouritefood, foodlink) VALUES ($1, $2, $3, $4)',
     [username, location, favouritefood, foodlink ],
     (error, results) => {
      if (error) {
        throw error;
      }
     response.status(200).json(request.body);
    })
  };
app.use(cors());
app.use(express.json());


app.get('/', (req, res) => res.json({ info: 'Node.js, Express, and Postgres API'}));

app.get('/munchit', getMunchit);
app.post('/munchit', postMunchit);


app.listen(port, () => console.log(`App running on port ${port}!`));