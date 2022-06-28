const { Router } = require('express');
const router = Router();
const { getUsers, deleteUsers, createUsers } = require('../controllers/users.controllers');
const verifyRoles = require('../middleware/verifyRoles')
const verifyJWT = require('../middleware/verifyJWT')

router.route('/')
    .get(verifyJWT,verifyRoles('2004'), getUsers)
    .post(createUsers) 

router.route('/:id')
    .delete(verifyJWT,verifyRoles('2004'), deleteUsers) 


module.exports = router;
