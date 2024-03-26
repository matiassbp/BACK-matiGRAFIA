const express = require('express');
const router = express.Router();
const { registerUser, loginUser, ping } = require('../controller/userController');

router.post('/register', registerUser);
router.post('/login', loginUser);
router.get('/ping', ping);

module.exports = router;
