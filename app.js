const express = require('express');

const { PORT = 3000 } = process.env;
const cardsRoute = require('./routes/cards');
const userRoute = require('./routes/users');

const app = express();

app.listen(PORT);

app.use('/cards', cardsRoute);
app.use('/users', userRoute);

app.use((req, res, next) => {
  res.status(404).send({ message: 'Requested resource not found' });
  next();
});
