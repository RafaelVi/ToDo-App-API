// const conex = require('../infra/conexao');
// class Tarefa{
//     create(tarefa,res){
//         // let data = new Date();
//         // tarefa.date = data.toISOString().slice(0,10);
//         const sql = 'INSERT INTO TAREFAS(TITULO,DESCRICAO,STATUS,DATACRIACAO,ID_USUARIO) SET (?,?,?,?,?)';

//         conex.run(sql,[tarefa.TITULO,
//             tarefa.DESCRICAO,
//             tarefa.STATUS,
//             tarefa.DATACRIACAO,
//             tarefa.ID_USUARIO],(err,respo) =>err? res.status(400).json(err): res.status(201).json(tarefa));
//     }
//     read(res){
//         const sql = 'SELECT * FROM TAREFAS';
//         conex.all(sql,(erro,results) => {if(erro){throw new Error(erro)}else{res.send(results)}});
//     }
//     buscaPorID(res,id){
//         const sql = `SELECT * FROM TAREFAS where id=${id}`;

//         conex.all(sql,(erro,results) => {if(erro){throw new Error(erro)}else{res.send(results[0])}});
//     }
//     update(id,tarefas,res){
//         const sql = `UPDATE TAREFAS SET TITULO=?,DESCRICAO=?,STATUS=?,DATACRIACAO=?,ID_USUARIO=?, where id= ?`;

//         conex.run(sql,[tarefas.TITULO,
//             tarefas.DESCRICAO,
//             tarefas.STATUS,
//             tarefas.DATACRIACAO,
//             tarefas.ID_USUARIO,id],(erro) => erro? res.status(400).json(erro):res.json({...tarefas,id}));
//     }
//     delete(id,res){
//         const sql = `DELETE FROM TAREFAS where id=${id}`;

//         conex.run(sql,(erro,results) => erro? res.status(400).json(erro):res.json({id}));

//     }
// }
class Tarefa{
    constructor(body){
        this.TITULO = body.TITULO;
        this.DESCRICAO = body.DESCRICAO;
        this.STATUS = body.STATUS;
        this.DATACRIACAO = body.DATACRIACAO;
        this.ID_USUARIO = body.ID_USUARIO;
    }
}
module.exports = Tarefa;