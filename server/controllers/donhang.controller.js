const Order = require('../models/donhang.model');
 
//Simple version, without validation or sanitation
exports.test = function (req, res) {
    res.send('Greetings from the Test controller!');
};
// controllers/donhang.js
exports.donhang_create = function (req, res) {
    let body = req.body || {};
    let donhang = new Order( {
        customerName: body.customerName || 'No Body',
        address: body.address || 'No Body address',
        phoneNumber: body.phoneNumber || 1111111,
        orderNumber: body.orderNumber || 2222222,
        shopID: body.shopID || 'Default LZD HAU GIANG'
    });

    donhang.save(function (err, data) {
        if (err) {
            res.send(err);
            return next(err);
        }
        res.send({data:data});
    })
};

exports.donhang_edit = function (req, res) {
    let body = req.body || {};

    donhang.findByIdAndUpdate(
        req.params.id, 
        body, 
    function (err, data) {
        if (err) {
            res.send(err);
            return next(err);
        }
        res.status(200).send("update success!");
    })
};

exports.getAll = function (req, res) {
    Order.find({}, function(err, donhang) {
        if(err){
            res.status(404).send("error from server");
        }
        res.send(donhang).status(200);
    });
};

exports.findById = function (req, res) {
    Order.findById(req.params.id, function(err, donhang) {
        if(err){
            res.status(404).send("Don Hang Not Found");
        }
        res.send(donhang).status(200);
    });
};

exports.deleteAllDocument = function (req, res) {
    Order.deleteMany({},function(ok, err){
        if (err) res.status(400);
        res.status(200).send("Delete successed");
    })
};

function renameFieldOfdonhang(req, res) {
    Order.updateMany({}, { $rename: { "placeOrder" : "shopID" } }, { multi: true }, function(err, data) {
        if (!err) { 
            //success 
            console.log('Changed ok')
        }
    })
}

exports.renameFieldOfdonhang = function (req, res) {
    renameFieldOfdonhang();
};


