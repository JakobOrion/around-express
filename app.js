const express = require('express');

const { PORT = 3000 } = process.env;

const app = express();

//test
app.listen(PORT, () => {
  console.log('App listening at port ${PORT}')
})