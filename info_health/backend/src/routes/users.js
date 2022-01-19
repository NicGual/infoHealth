const { Router } = require('express');
const router = Router();
const { getUsers, deleteUsers, createUsers } = require('../controllers/users.controllers');

router.route('/')
    .get(getUsers)
    .post(createUsers) 

router.route('/:id')
    .delete(deleteUsers) 


module.exports = router;
