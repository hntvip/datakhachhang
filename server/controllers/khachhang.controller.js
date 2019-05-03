const Customer = require('../models/khachhang.model');

//Simple version, without validation or sanitation
exports.test = function (req, res) {
    res.send('Greetings from the Test controller!');
};
// controllers/products.js
exports.khachhang_create = function (req, res) {

    let khachhang = new Customer(
        {
            name: "Tai",
            address: "Can THo",
            phoneNumber: 123,
            orderNumber: 1,
            placeOrder:"LZD"
        }
    );

    khachhang.save(function (err) {
        if (err) {
            return next(err);
        }
        res.send('khachhang Created successfully')
    })
};

exports.getAll = function (req, res) {
    
    Customer.find({}, function(err, users) {
        // var userMap = {};
        // console.log(users)
        // users.forEach(function(user) {
        //   userMap[user._id] = user;
        // });
    
        // res.send(userMap);
        console.log("Hello"+ users)  
      });
};