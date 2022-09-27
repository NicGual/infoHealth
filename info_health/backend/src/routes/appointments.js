const { Router } = require('express');
const verifyRoles = require('../middleware/verifyRoles')
const verifyJWT = require('../middleware/verifyJWT')
const { getAppointments} = require('../controllers/appointments.controller');
const router = Router();

router.route('/')
    .get(verifyJWT,verifyRoles('2001'), getAppointments)

module.exports = router;