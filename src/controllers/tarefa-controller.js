const route = 'task';
const tarefa = require('../models/tarefa-model');
function configroute(app){
    app.get(`/${route}`, (req, res) => {
        res.send(`Rota ativada com get e rota ${route} valores de ${route} devem ser retornados`);
      })
    app.post(`/${route}`, (req, res) => {
        console.log(req.body);
        tarefa.adicionar(req.body);
        res.send('Tarefas adicionada');
      });  
}

module.exports = configroute;