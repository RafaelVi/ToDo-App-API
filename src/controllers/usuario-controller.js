const route = 'user';
const user = require('../models/usuario-model');
function configroute(app){
    app.get(`/${route}`, (req, res) => {
        res.send(`Rota ativada com get e rota ${route} valores de ${route} devem ser retornados`);
      });
    app.post(`/${route}`, (req, res) => {
        console.log(req.body);
        user.adicionar(req.body);
        res.send('Usuário cadastrado');
      });  
}

module.exports = configroute; 