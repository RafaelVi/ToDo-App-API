const route = 'user';
const user = require('../models/usuario-model');
function configroute(app){
    app.get(`/${route}`, (req, res) => {
      user.read(res);
    });
    app.get(`/${route}/:id`, (req, res) => {
      let id = parseInt(req.params.id);
      user.buscaPorID(res,id);
    });  
    app.post(`/${route}`, (req, res) => {
      user.create(req.body,res);
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