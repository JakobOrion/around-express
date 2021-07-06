const path = require('path');
const readFile = require('../utils/readFile');
const User = require('../models/user');

const usersPath = path.join(__dirname, '..', 'data', 'users.json');

const getUsers = (req, res) => {
  readFile(usersPath);
  User.find({})
    .then((users) => {
      res.status(200).send({ data: users });
    })
    .catch(() => {
      res.status(500).send({ message: 'Requested resource not found' });
    });
};

const getUserId = (req, res) => {
  User.findById(req.params.id)
    .then((data) => {
      const userData = data.find((user) => user._id === req.params.id);
      return (userData ? res.status(200).send(userData) : res.status(404).send({ message: 'User ID not found' }));
    })
    .catch(() => {
      res.status(500).send({ message: 'Requested resource not found' });
    });
};

const createUser = (req, res) => {
  const { name, about, avatar } = req.body;

  User.create({ name, about, avatar })
    .then((user) => res.send({ data: user }))
    .catch(() => {
      res.status(500).send({ message: 'Error' });
    });
};

module.exports = { getUsers, getUserId, createUser };
