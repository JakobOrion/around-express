const path = require('path');
const readFile = require('../utils/readFile');

const cardsPath = path.join(__dirname, '..', 'data', 'cards.json');

const getCards = (req, res) => {
  readFile(cardsPath)
    .then((cards) => {
      res.status(200).send(cards);
    })
    .catch(() => {
      res.status(500).send({ message: 'Requested resource not found' });
    });
};

module.exports = { getCards };
