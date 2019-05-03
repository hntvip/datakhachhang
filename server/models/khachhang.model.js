const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let Customer = new Schema({
    name: {type: String, required: true},
    address: {type: String, required: true},
    phoneNumber: {type: Number,required: true},
    orderNumber: {type: Number, required: true},
    placeOrder: {type: String, required: true}
});

// {
//     "_id":{"$oid":"5cc7cd971c9d440000cc89cd"},
//     "name":"Huynh Ngoc Tu",
//     "address":"30 đoàn văn Chia",
//     "phoneNumber":{"$numberInt":"888109595"},
//     "orderNumber":{"$numberInt":"1234"},
//     "placeOrder":"Sendo"
// }

// Export the model
module.exports = mongoose.model('Customer', Customer);