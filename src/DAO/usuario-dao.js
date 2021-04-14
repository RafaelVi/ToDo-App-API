class UsuarioDao{
    constructor(bd){
        this.bd = bd;
    }
    listaUsuarios(res){
        const promise = new Promise((resolve,reject) => {
            const sql = 'SELECT * FROM USUARIOS';
            this.bd.all(sql,(erro,results) => {
                erro? reject(erro):resolve(results);  
            });
        })
        .then(results => res.send(results))
        .catch(err => {res.send(err);throw new Error(err)});

        return promise;
    }
    insereUsuario(usuario,res){
        const promise = new Promise((resolve,reject) => {
            const sql = 'INSERT INTO USUARIOS(NOME,EMAIL,SENHA) VALUES(?,?,?)';
            this.bd.run(sql,[usuario.NOME,usuario.EMAIL,usuario.SENHA],(erro) => {
                erro? reject(erro):resolve('Usuário Criado');
                
            });
        })
        .then(response => res.status(201).send(response))
        .catch(err => {res.status(404).send(err);throw new Error(err)});

        return promise;
    }
}

module.exports =  UsuarioDao;