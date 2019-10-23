const express = require('express');
const app = express();
const port = 3000;
const {KEY} = require('./api');

app.listen(port, () => {
  console.log(`Listening from ${port}`)
});