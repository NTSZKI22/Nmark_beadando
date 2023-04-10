const express = require('express');
const app = express();
const port = 3000;

const mysql = require('mysql');
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'jelszo',
  database: 'esemenyek'
});

app.get('/esemenyek', (req, res) => {
  const query = 'SELECT * FROM esemenyek';
  connection.query(query, (err, results) => {
    if (err) throw err;
    res.send(results);
  });
});

app.post('/esemenyek', (req, res) => {
  const { nev, datum, leiras, idopont, helyszin_id, szervezo_id } = req.body;

  if (!nev || !datum || !idopont || !helyszin_id || !szervezo_id) {
    return res.status(400).send('Hibás adatok');
  }

  const query = 'INSERT INTO esemenyek (nev, datum, leiras, idopont, helyszin_id, szervezo_id) VALUES (?, ?, ?, ?, ?, ?)';
  connection.query(query, [nev, datum, leiras, idopont, helyszin_id, szervezo_id], (err, results) => {
    if (err) throw err;
    res.send('Esemény sikeresen létrehozva');
  });
});

app.get('/helyszinek', (req, res) => {
  const query = 'SELECT * FROM helyszinek';
  connection.query(query, (err, results) => {
    if (err) throw err;
    res.send(results);
  });
});

app.get('/szervezok', (req, res) => {
  const query = 'SELECT * FROM szervezok';
  connection.query(query, (err, results) => {
    if (err) throw err;
    res.send(results);
  });
});

app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`);
});
