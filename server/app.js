// app.js
const express = require('express');
const bodyParser = require('body-parser');

const MongoClient = require('mongodb').MongoClient;

// replace the uri string with your connection string.
const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// const khachhang = require('./routes/khachhang.route'); // Imports routes for the khachhangs
// app.use('/khachhang', khachhang);
const Customer = require('./models/khachhang.model.js');

let port = 1234;
var collection;
app.listen(port, () => {
    const uri = "mongodb+srv://hntvip:Tu%4012345678@testcluster-o26pr.mongodb.net/test?retryWrites=true";
    console.log('Server is up and running on port numner ' + port);
    MongoClient.connect(uri, { useNewUrlParser: true }, (error, client) => {
        if(error) {
            throw error;
        }
        database = client.db('khachhang');
        collection = database.collection("khachhang_collection");
        
        
    });
});
app.post("/create", (request, response) => {
    console.log(request.body)
    collection.insert(request.body, (error, result) => {
        if(error) {
            return response.status(500).send(error);
        }
        response.send(result.result);
    });
  
});