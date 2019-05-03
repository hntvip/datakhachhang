[1mdiff --git a/server/app.js b/server/app.js[m
[1mindex e21edfd..beee651 100644[m
[1m--- a/server/app.js[m
[1m+++ b/server/app.js[m
[36m@@ -1,40 +1,20 @@[m
 // app.js[m
 const express = require('express');[m
 const bodyParser = require('body-parser');[m
[31m-[m
[31m-const MongoClient = require('mongodb').MongoClient;[m
[32m+[m[32mconst db = require('./db');[m
 [m
 // replace the uri string with your connection string.[m
 const app = express();[m
[32m+[m
 app.use(bodyParser.json());[m
 app.use(bodyParser.urlencoded({ extended: true }));[m
 [m
[31m-// const khachhang = require('./routes/khachhang.route'); // Imports routes for the khachhangs[m
[31m-// app.use('/khachhang', khachhang);[m
[31m-const Customer = require('./models/khachhang.model.js');[m
[32m+[m[32mconst khachhang = require('./routes/khachhang.route'); // Imports routes for the khachhangs[m
[32m+[m
[32m+[m[32mapp.use('/khachhang', khachhang);[m
 [m
 let port = 1234;[m
[31m-var collection;[m
[32m+[m
 app.listen(port, () => {[m
[31m-    const uri = "mongodb+srv://hntvip:Tu%4012345678@testcluster-o26pr.mongodb.net/test?retryWrites=true";[m
     console.log('Server is up and running on port numner ' + port);[m
[31m-    MongoClient.connect(uri, { useNewUrlParser: true }, (error, client) => {[m
[31m-        if(error) {[m
[31m-            throw error;[m
[31m-        }[m
[31m-        database = client.db('khachhang');[m
[31m-        collection = database.collection("khachhang_collection");[m
[31m-        [m
[31m-        [m
[31m-    });[m
 });[m
[31m-app.post("/create", (request, response) => {[m
[31m-    console.log(request.body)[m
[31m-    collection.insert(request.body, (error, result) => {[m
[31m-        if(error) {[m
[31m-            return response.status(500).send(error);[m
[31m-        }[m
[31m-        response.send(result.result);[m
[31m-    });[m
[31m-  [m
[31m-});[m
\ No newline at end of file[m
