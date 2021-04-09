const route = 'task';
const tarefa = require('../models/tarefa-model');
function configroute(app){
    app.get(`/${route}`, (req, res) => {
      tarefa.read(res);
    })
    app.get(`/${route}/:id`, (req, res) => {
      const id = parseInt(req.params.id);
      tarefa.buscaPorID(res,id);
    })  
    app.post(`/${route}`, (req, res) => {
      tarefa.create(req.body,res);    
    });
    app.patch(`/${route}/:id`, (req, res) => {
      let id = parseInt(req.params.id);
      tarefa.update(id,req.body,res);
    });
    app.delete(`/${route}/:id`, (req, res) => {
      let id = parseInt(req.params.id);
      tarefa.delete(id,res);
    });        
}

module.exports = configroute;