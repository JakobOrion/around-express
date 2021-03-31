const readFile = require('../utils/readFile');

const getUsers = (req, res) => {
  readFile('./data/users.json')
    .then((users) => {
      res.status(200).send(users);
    })
    .catch(() => {
      res.status(404).send({ message: 'Requested resource not found' });
    });
};

const getUser = (req, res) => {
  readFile('./data/users.json')
    .then((data) => {
      const userData = data.find((user) => user._id === req.params.id);
      return (userData ? res.status(200).send(userData) : res.status(404).send({ message: 'User ID not found' }));
    });
};

module.exports = { getUser, getUsers };
