const express = require('express');
const routeUser = require('../controllers/usuario-controller');
const routeTask = require('../controllers/tarefa-controller');
const bodyParser = require('body-parser');



module.exports = () => {
    const app = express();
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({ extended: true }));
    app.use(logRequest);
    function logRequest(req,res,next){
        console.log(req.method);
        next();
    } 
    routeUser(app);
    
    routeTask(app);

    return app;
}