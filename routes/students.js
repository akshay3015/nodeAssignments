const express = require('express');
const router = express.Router();
const studentController = require('../controller/students');


router.post('/registration', studentController.userRegistration);
router.post('/loginWithEmail', studentController.loginWithEmail);
router.get('/getAll', studentController.getAll);
router.get('/getById',  studentController.getById);
router.post('/update', studentController.update);
router.delete('/remove',  studentController.remove);
module.exports = router;
