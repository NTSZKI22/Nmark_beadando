const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

const mysql = require('mysql');
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'jelszo',
  database: 'esemenyek'
});

app.use(express.json());

app.use('/esemenyek', require('./routes/esemenyek'));
app.use('/helyszinek', require('./routes/helyszinek'));
app.use('/szervezok', require('./routes/szervezok'));
