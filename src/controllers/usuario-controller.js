const route = 'user';
const User = require('../models/usuario-model');
const UserDAO = require('../DAO/usuario-dao');
const conex = require('../infra/conexao');
const userDAO = new UserDAO(conex);
function configroute(app){
    app.get(`/${route}`, (req, res) => {
      userDAO.listaUsuarios(res);
    });
    app.get(`/${route}/:id`, (req, res) => {
      let id = parseInt(req.params.id);
      user.buscaPorID(res,id);
    });  
    app.post(`/${route}`, (req, res) => {
      let user = new User(req.body);
      userDAO.insereUsuario(user,res);
    });
    app.patch(`/${route}/:id`, (req, res) => {
      let id = parseInt(req.params.id);
      user.update(id,req.body,res);
    });
    app.delete(`/${route}/:id`, (req, res) => {
      let id = parseInt(req.params.id);
      user.delete(id,res);
    });       
}

module.exports = configroute; 