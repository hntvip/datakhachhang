const Customer = require('../models/khachhang.model');
 
//Simple version, without validation or sanitation
exports.test = function (req, res) {
    res.send('Greetings from the Test controller!');
};
// controllers/products.js
exports.khachhang_create = function (req, res) {
    let body = req.body || {
        name: '',
        address: '',
        phoneNumber: 0,
        orderNumber:0,
        placeOrder:''
    };

    let khachhang = new Customer( {
        name: body.name,
        address: body.address,
        phoneNumber: body.phoneNumber,
        orderNumber: body.orderNumber,
        placeOrder: body.placeOrder
    });
    
    khachhang.save(function (err) {
        if (err) {
            return next(err);
        }
        res.send('khachhang created successfully')
    })
};

exports.getAll = function (req, res) {
    
    Customer.find({}, function(err, users) {
        res.send(users)
        res.status(200);
    });
};

exports.findByName = function (req, res) {
    let queryName = req.params.name;
    Customer.find({ name: queryName }, function(err, customer){
        res.send(customer);
        res.status(200);
    })
};