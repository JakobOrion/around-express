const Card = require('../models/card');
const { checkErrors } = require('../utils/utils');

const getCards = (req, res) => {
  Card.find({})
    .orFail(new Error('Not Found'))
    .then((cards) => {
      res.status(200).send({ data: cards });
    })
    .catch((err) => {
      checkErrors({ res, err });
    });
};

const createCard = (req, res) => {
  const { name, link } = req.body;

  Card.create({ name, link, owner: req.user._id })
    .then((card) => res.send({ data: card }))
    .catch((err) => {
      checkErrors({ res, err });
    });
};

const deleteCard = (req, res) => {
  Card.findByIdAndDelete(req.params.cardId)
    .orFail(new Error('Not Found'))
    .then(() => res.status(200).send({ message: 'Card deleted' }))
    .catch((err) => {
      checkErrors({ res, err });
    });
};

module.exports = { getCards, createCard, deleteCard };
