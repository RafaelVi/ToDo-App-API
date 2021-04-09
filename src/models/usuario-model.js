const conex = require('../infra/conexao');
class Usuario{
    // create(usuario,res){
    //     const sql = 'INSERT INTO usuario SET ?';

    //     conex.query(sql,usuario,(err,results) =>err? res.status(400).json(err): res.status(201).json(usuario));
    // }
    read(res){
        const sql = 'SELECT * FROM USUARIOS';
        conex.all(sql,(erro,results) => {if(erro){throw new Error(erro)}else{res.send(results)}});
    }
    // buscaPorID(res,id){
    //     const sql = `SELECT * FROM usuario where id=${id}`;

    //     conex.query(sql,(erro,results) => erro? res.status(400).json(erro):res.json(results[0]));

    // }
    // update(id,valores,res){
    //     const sql = `UPDATE usuario SET ? where id= ?`;

    //     conex.query(sql,[valores,id],(erro,results) => erro? res.status(400).json(erro):res.json({...valores,id}));
    // }
    // delete(id,res){
    //     const sql = `DELETE FROM usuario where id=${id}`;

    //     conex.query(sql,(erro,results) => erro? res.status(400).json(erro):res.json({id}));

    // }
}

module.exports = new Usuario;