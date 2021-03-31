const express = require('express');

const router = express.Router();
const { getUser, getUsers } = require('../controllers/users');

router.get('/', getUsers);
router.get('/:id', getUser);

module.exports = router;
