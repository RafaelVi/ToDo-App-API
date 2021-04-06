const conex = require('../infra/conexao');
class Usuario{
    adicionar(usuario){
        const sql = 'INSERT INTO usuario SET ?';

        conex.query(sql,usuario,(err,res) =>err? console.log(err): console.log(res));
    }
}

module.exports = new Usuario;