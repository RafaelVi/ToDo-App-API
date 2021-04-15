const express = require('express');
const routeUser = require('../controllers/usuario-controller');
const routeTask = require('../controllers/tarefa-controller');
const bodyParser = require('body-parser');
const cors = require('cors');



module.exports = () => {
    const app = express();
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({ extended: true }));
    app.use(cors());
    routeUser(app);
    
    routeTask(app);

    return app;
}