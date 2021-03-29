const express = require('express');
const app = express();
const port = 3000;
const route1 = 'user';
const route2 = 'task';

app.get(`/${route1}`, (req, res) => {
  res.send(`Rota ativada com get e rota ${route1} valores de ${route1} devem ser retornados`);
})

app.get(`/${route2}`, (req, res) => {
  res.send(`Rota ativada com get e rota ${route2} valores de ${route2} devem ser retornados`);
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
})