const express = require('express');
const app = express();
const port = 3000;
const routeUser = require('./controllers/usuario-controller');
const routeTask = require('./controllers/tarefa-controller');

routeUser(app);

routeTask(app);

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
})