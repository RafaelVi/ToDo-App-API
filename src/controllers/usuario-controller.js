const route = 'user';
const User = require('../models/usuario-model');
const UserDAO = require('../DAO/usuario-dao');
const conex = require('../infra/conexao');
const userDAO = new UserDAO(conex);
function configroute(app){
    app.get(`/${route}`,async (req, res) => {
      try {
        let response = await userDAO.listaUsuarios();
        res.status(200).send(response);
      }catch(e){
        res.status(404).send(e);
      }
      
    });
    app.get(`/${route}/:id`,async (req, res) => {
      try {
        let id = parseInt(req.params.id);
        let response = await userDAO.pesquisaUsuario(id);
        res.status(200).send(response);
      }catch(e){
        res.status(404).send(e);
      };
    });  
    app.post(`/${route}`,async (req, res) => {
      try{
        let user = new User(req.body);
        let response = await userDAO.insereUsuario(user);
        res.status(200).send(response);
      } catch(e){
        res.status(404).send(e);
      }
      
    });
    app.patch(`/${route}/:id`,async (req, res) => {
      try{
        let id = parseInt(req.params.id);
        let user = new User(req.body)
        let response = await userDAO.atualizaUsuario(id,user,res);
        res.status(200).send(response);
      } catch(e){
        res.status(404).send(e);
      }
      
    });
    app.delete(`/${route}/:id`,async (req, res) => {
      try{
        let id = parseInt(req.params.id);
        let response = await userDAO.deletaUsuario(id);
        res.status(200).send(response);
      } catch(e){
        res.status(404).send(e);
      }
     
    });       
}

module.exports = configroute; 