const readFile = require('../utils/readFile');

const getCards = (req, res) => {
  readFile('./data/cards.json')
    .then((cards) => {
      res.status(200).send(cards);
    })
    .catch(() => {
      res.status(404).send({ message: 'Requested resource not found' });
    });
};

module.exports = { getCards };
