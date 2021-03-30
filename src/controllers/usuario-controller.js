const route = 'user';
function configroute(app){
    app.get(`/${route}`, (req, res) => {
        res.send(`Rota ativada com get e rota ${route} valores de ${route} devem ser retornados`);
      })
}

module.exports = configroute; 