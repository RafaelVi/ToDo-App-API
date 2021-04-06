const conex = require('../infra/conexao');
class Tarefa{
    adicionar(tarefa){
        let data = new Date();
        tarefa.date = data.toISOString().slice(0,10);
        const sql = 'INSERT INTO tarefas SET ?';

        conex.query(sql,tarefa,(err,res) =>err? console.log(err): console.log(res));
    }
}

module.exports = new Tarefa;