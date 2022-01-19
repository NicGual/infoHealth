const express = require('express')
const {singup, login, singupGet} = require('../controllers/auth.controller')
const router = express.Router();

router.route('/singup')
    .post(singup)
    .get(singupGet)

router.route('/singin')
    .post(login)
//router.post('/singup', singup);
//router.post('/singin', login);
module.exports = router;