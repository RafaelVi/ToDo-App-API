const express = require('express');
const routeUser = require('../controllers/usuario-controller');
const routeTask = require('../controllers/tarefa-controller');
const bodyParser = require('body-parser');



module.exports = () => {
    const app = express();
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({ extended: true }));
    routeUser(app);
    
    routeTask(app);

    return app;
}