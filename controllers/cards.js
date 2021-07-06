const Card = require('../models/card');

const getCards = (req, res) => {
  Card.find({})
    .then((cards) => {
      res.status(200).send({ data: cards });
    })
    .catch(() => {
      res.status(500).send({ message: 'Requested resource not found' });
    });
};

const createCard = (req, res) => {
  const { name, link } = req.body;
  console.log(req.user._id);

  Card.create({ name, link, owner: req.user._id })
    .then((card) => res.send({ data: card }))
    .catch(() => {
      res.status(500).send({ message: 'Requested resource not found' });
    });
};

const deleteCard = (req, res) => {
  Card.findByIdAndDelete(req.params.cardId)
    .then(() => res.status(200).send({ message: 'Card deleted' }))
    .catch(() => {
      res.status(500).send({ message: 'Requested resource not found' });
    });
};

module.exports = { getCards, createCard, deleteCard };
