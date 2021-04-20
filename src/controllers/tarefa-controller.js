const route = 'task';
const TarefaDAO = require('../DAO/tarefa-dao');
const Tarefa = require('../models/tarefa-model');
const conex = require('../infra/conexao');
const tarefaDAO = new TarefaDAO(conex);

function configroute(app){
    app.get(`/${route}`,async (req, res) => {
      try {
        let response = await tarefaDAO.listaTarefas()
        res.status(200).send(response);
      }catch(e){
        res.status(404).send({'Erro':'Ops! Deu erro :/'});
      }
    })
    app.get(`/${route}/:id`,async (req, res) => {
      try {
        let id = parseInt(req.params.id);
        let response = await tarefaDAO.pesquisaTarefa(id);
        res.status(200).send(response);
      }catch(e){
        res.status(404).send(e);
      };
    })  
    app.post(`/${route}`,async (req, res) => {
      try{
        let user = new User(req.body);
        let response = await tarefaDAO.insereTarefa(user);
        res.status(200).send(response);
      } catch(e){
        res.status(404).send(e);
      }
    });
    app.patch(`/${route}/:id`,async (req, res) => {
      try{
        let id = parseInt(req.params.id);
        let user = new User(req.body)
        let response = await tarefaDAO.atualizaTarefa(id,user,res);
        res.status(200).send(response);
      } catch(e){
        res.status(404).send(e);
      }
    });
    app.delete(`/${route}/:id`,async (req, res) => {
      try{
        let id = parseInt(req.params.id);
        let response = await tarefaDAO.deletaTarefa(id);
        res.status(200).send(response);
      } catch(e){
        res.status(404).send(e);
      }
    });        
}

module.exports = configroute;