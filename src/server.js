const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send('<h1>Main Production Version</h1>');
});

app.listen(3000, () => {
  console.log('Production server running');
});
