const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let Order = new Schema({
    customerName: {type: String, required: true},
    address: {type: String},
    phoneNumber: {type: Number},
    orderNumber: {type: Number, required: true},
    shopID: {type: String},
    created: {type: Date, default: new Date()}
});

// Export the model
module.exports = mongoose.model('Order', Order);