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

const updateProfile = (req, res) => {
  const { name, about } = req.body;
  const { _id } = req.user;

  User.findByIdAndUpdate(_id, { name, about }, { new: true, runValidators: true })
    .orFail(new Error('Not Found'))
    .then((user) => {
      res.send(user);
    })
    .catch((err) => {
      checkErrors({ res, err });
    });
};

const updateAvatar = (req, res) => {
  const { avatar } = req.body;
  const { _id } = req.user;

  User.findByIdAndUpdate(_id, { avatar }, { new: true, runValidators: true })
    .orFail(new Error('Not Found'))
    .then((user) => {
      res.send(user);
    })
    .catch((err) => {
      checkErrors({ res, err });
    });
};

module.exports = {
  getUsers, getUserId, createUser, updateProfile, updateAvatar,
};
