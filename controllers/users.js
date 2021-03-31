const path = require('path');
const readFile = require('../utils/readFile');

const usersPath = path.join(__dirname, '..', 'data', 'users.json');

const getUsers = (req, res) => {
  readFile(usersPath)
    .then((users) => {
      res.status(200).send(users);
    })
    .catch(() => {
      res.status(404).send({ message: 'Requested resource not found' });
    });
};

const getUser = (req, res) => {
  readFile(usersPath)
    .then((data) => {
      const userData = data.find((user) => user._id === req.params.id);
      return (userData ? res.status(200).send(userData) : res.status(404).send({ message: 'User ID not found' }));
    });
};

module.exports = { getUser, getUsers };
