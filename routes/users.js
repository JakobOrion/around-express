const express = require('express');

const router = express.Router();
const { getUsers, getUserId, createUser } = require('../controllers/users');

router.get('/', getUsers);
router.get('/:id', getUserId);
router.post('/', createUser);

module.exports = router;
