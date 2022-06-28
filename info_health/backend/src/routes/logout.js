const express = require('express');
const router = express.Router();
const {logOut} = require('../controllers/logout.controller')

router.route('/')
    .get(logOut)

module.exports = router;