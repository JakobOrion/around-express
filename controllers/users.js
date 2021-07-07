const User = require('../models/user');
const { checkErrors } = require('../utils/utils');

const getUsers = (req, res) => {
  User.find({})
    .orFail(new Error('Not Found'))
    .then((users) => {
      res.status(200).send({ data: users });
    })
    .catch((err) => {
      checkErrors({ res, err });
    });
};

const getUserId = (req, res) => {
  User.findById(req.params.id)
    .then((data) => {
      const userData = data.find((user) => user._id === req.params.id);
      return (userData ? res.status(200).send(userData) : res.status(404).send({ message: 'User ID not found' }));
    })
    .catch((err) => {
      checkErrors({ res, err });
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
