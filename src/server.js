const express = require('express');
const app = express();
const login = require('./login/login');

app.get('/', (req, res) => {
  res.send('<h1>Login Feature Branch</h1>');
});

app.get('/login', login);

app.listen(3000, () => {
  console.log('Login feature running');
});
