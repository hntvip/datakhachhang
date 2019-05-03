const mongoose = require('mongoose');

const uri = "mongodb+srv://hntvip:Tu%4012345678@testcluster-o26pr.mongodb.net/khachhang?retryWrites=true";
let db;
    db = mongoose.connect(uri, {useNewUrlParser: true});

module.exports = db;