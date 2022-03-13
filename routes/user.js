const express = require('express');
const router = express.Router();
const userController = require('../controller/user');


router.post('/registration',userController.registration);
router.get('/getAll',userController.getAll);


module.exports = router