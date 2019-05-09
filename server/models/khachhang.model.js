const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let Customer = new Schema({
    name: {type: String, required: true},
    address: {type: String},
    phoneNumber: {type: Number, required: true},
    orderNumber: {type: Number},
    shopID: {type: String},
    created: {type: Date, default: new Date()}
});

// Export the model
module.exports = mongoose.model('Customer', Customer);