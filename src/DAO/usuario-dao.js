class UsuarioDao{
    constructor(bd){
        this.bd = bd;
    }
    async listaUsuarios(){
        const promise = new Promise((resolve,reject) => {
            const sql = 'SELECT * FROM TAREFAS';
            this.bd.all(sql,(erro,results) => {
                erro? reject(erro):resolve(results);
            });
        })

        return promise;
    }
    pesquisaUsuario(id){
        const promise = new Promise((resolve,reject) => {  
            const sql = `SELECT * FROM USUARIOS where id=?`;
            this.bd.get(sql,id,(erro,results) => {if(erro){reject(erro)}else{resolve(results)}});
        })

        return promise;
    }
    insereUsuario(usuario){
        const promise = new Promise((resolve,reject) => {
            const sql = 'INSERT INTO USUARIOS(NOME,EMAIL,SENHA) VALUES(?,?,?)';
            this.bd.run(sql,[usuario.NOME,usuario.EMAIL,usuario.SENHA],(erro) => {
                erro? reject(erro):resolve('Usuário Criado');
                
            });
        })


        return promise;
    }
    atualizaUsuario(id,valores,res){
        const promise = new Promise((resolve,reject) => {
            const sql = `UPDATE USUARIOS SET NOME = ?, EMAIL = ?, SENHA = ? where id= ?`;
            this.bd.run(sql,[valores.NOME,valores.EMAIL,valores.SENHA,id],(erro,results) => erro?reject(erro):resolve(res.json({...valores,id})));
        })

        return promise;
    }
    deletaUsuario(id){
        const promise = new Promise((resolve,reject) => {  
            const sql = `DELETE FROM USUARIOS where id=?`;
            this.bd.get(sql,id,(erro) => {erro?reject(erro):resolve({'id':id})});
        })

        return promise;
    }
}

module.exports =  UsuarioDao;