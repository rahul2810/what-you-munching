const Pool = require('pg').Pool;
const express = require('express');

const app = express();

const port = 3000;

const pool = new Pool({
    user: 'postgres',
    host: 'localhost',
    database: 'what-you-munching',
    password: '12345678',
    port: 5432,
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
      response.status(201).send('Record Added : ' + username + ' ' + location + ' ' + favouritefood + ' ' + foodlink );
    })
  };

app.use(express.json());

app.get('/', (req, res) => res.json({ info: 'Node.js, Express, and Postgres API'}));

app.get('/munchit', getMunchit);
app.post('/munchit', postMunchit);


app.listen(port, () => console.log(`App running on port ${port}!`));