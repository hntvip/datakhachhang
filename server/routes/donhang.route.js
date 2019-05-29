const express = require('express');
const router = express.Router();

// Require the controllers WHICH WE DID NOT CREATE YET!!
const donhang_controller = require('../controllers/donhang.controller');

// a simple test url to check that all of our files are communicating correctly.
router.get('/test', donhang_controller.test);
router.post('/create', donhang_controller.donhang_create);
router.get('/getAll', donhang_controller.getAll);
router.get('/getById/:id', donhang_controller.findById);
router.delete('/deleteAll', donhang_controller.deleteAllDocument);

module.exports = router;