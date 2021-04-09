const conex = require('../infra/conexao');
class Tarefa{
    // create(tarefa,res){
    //     let data = new Date();
    //     tarefa.date = data.toISOString().slice(0,10);
    //     const sql = 'INSERT INTO tarefas SET ?';

    //     conex.query(sql,tarefa,(err,respo) =>err? res.status(400).json(err): res.status(201).json(tarefa));
    // }
    read(res){
        const sql = 'SELECT * FROM TAREFAS';
        conex.all(sql,(erro,results) => {if(erro){throw new Error(erro)}else{res.send(results)}});
    }
    // buscaPorID(res,id){
    //     const sql = `SELECT * FROM tarefas where id=${id}`;

    //     conex.query(sql,(erro,results) => {
    //         if(erro) {res.status(400).json(erro)}
    //         else{
    //             let formatResults = results[0];
    //             formatResults.date = formatResults.date.toISOString().slice(0,10);
    //             res.send(formatResults);
    //         }});
    // }
    // update(id,valores,res){
    //     const sql = `UPDATE tarefas SET ? where id= ?`;

    //     conex.query(sql,[valores,id],(erro,results) => erro? res.status(400).json(erro):res.json({...valores,id}));
    // }
    // delete(id,res){
    //     const sql = `DELETE FROM tarefas where id=${id}`;

    //     conex.query(sql,(erro,results) => erro? res.status(400).json(erro):res.json({id}));

    // }
}

module.exports = new Tarefa;