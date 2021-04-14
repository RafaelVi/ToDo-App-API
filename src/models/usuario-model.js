// const conex = require('../infra/conexao');
// class Usuario{
//     create(usuario,res){
//         const sql = 'INSERT INTO USUARIOS(NOME,EMAIL,SENHA) VALUES(?,?,?)';
//         conex.run(sql,[usuario.NOME,usuario.EMAIL,usuario.SENHA],(erro) => {if(erro){console.log(erro);}else{res.status(201).send('Usuário Criado')}});
//     }
//     read(res){
//         const sql = 'SELECT * FROM USUARIOS';
//         conex.all(sql,(erro,results) => {if(erro){throw new Error(erro)}else{res.send(results)}});
//     }
//     buscaPorID(res,id){
//         const sql = `SELECT * FROM USUARIOS where id=${id}`;
//         conex.all(sql,(erro,results) => {if(erro){throw new Error(erro)}else{res.send(results[0])}});

//     }
//     update(id,valores,res){
//         const sql = `UPDATE USUARIOS SET NOME = ?, EMAIL = ?, SENHA = ? where id= ?`;
//         conex.run(sql,[valores.NOME,valores.EMAIL,valores.SENHA,id],(erro,results) => erro? console.log(erro):res.json({...valores,id}));
//     }
//     delete(id,res){
//         const sql = `DELETE FROM USUARIOS where id=${id}`;
//         conex.run(sql,(erro,results) => erro? res.status(400).json(erro):res.json({id}));

//     }
// }

class Usuario{
    constructor(body){
        this.NOME = body.NOME;
        this.EMAIL = body.EMAIL;
        this.SENHA = body.SENHA;
    
    }
}

module.exports = Usuario;