const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let Customer = new Schema({
    name: {type: String, required: true},
    address: {type: String, required: true},
    phoneNumber: {type: Number,required: true},
    orderNumber: {type: Number, required: true},
    placeOrder: {type: String, required: true}
});

// Export the model
module.exports = mongoose.model('Customer', Customer);