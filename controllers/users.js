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
    .orFail(new Error('Not Found'))
    .then((user) => {
      res.status(200).send({ data: user });
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
