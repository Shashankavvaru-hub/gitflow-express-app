const express = require('express');
const app = express();
const login = require('./login/login');

app.get('/', (req, res) => {
  res.send('<h1>Release 1.0 Stable</h1>');
});

app.get('/login', login);

app.listen(3000, () => {
  console.log('Release 1.0 running');
});
