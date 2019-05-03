// app.js
const express = require('express');
const bodyParser = require('body-parser');
const db = require('./db');

// replace the uri string with your connection string.
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const khachhang = require('./routes/khachhang.route'); // Imports routes for the khachhangs

app.use('/khachhang', khachhang);

let port = 1234;

app.listen(port, () => {
    console.log('Server is up and running on port numner ' + port);
});
