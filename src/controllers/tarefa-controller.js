const route = 'task';
const TarefaDAO = require('../DAO/tarefa-dao');
const Tarefa = require('../models/tarefa-model');
const conex = require('../infra/conexao');
const tarefaDAO = new TarefaDAO(conex);

function configroute(app){
    app.get(`/${route}`, (req, res) => {
      tarefaDAO.listaTarefas(res);
    })
    app.get(`/${route}/:id`, (req, res) => {
      const id = parseInt(req.params.id);
      tarefa.buscaPorID(res,id);
    })  
    app.post(`/${route}`, (req, res) => {
      let task = new Tarefa(req.body)
      tarefaDAO.insereTarefa(task,res);    
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