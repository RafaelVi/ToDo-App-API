class TarefaDao{
    constructor(bd){
        this.bd = bd;
    }
    listaTarefas(){
        const promise = new Promise((resolve,reject) => {
            const sql = 'SELECT * FROM TAREFAS';
            this.bd.all(sql,(erro,results) => {
                erro? reject(erro):resolve(results);
            });
        })

        return promise;
    }
    pesquisaTarefa(res,id){
        const promise = new Promise((resolve,reject) => {  
            const sql = `SELECT * FROM TAREFAS where id=?`;
            this.bd.get(sql,id,(erro,results) => {if(erro){reject(erro)}else{resolve(results)}});
        })

        return promise;
    }
    insereTarefa(tarefa,res){
        const promise = new Promise((resolve,reject) => {
            const sql = 'INSERT INTO TAREFAS(TITULO,DESCRICAO,STATUS,DATACRIACAO,ID_USUARIO) VALUES(?,?,?,?,?)';
            this.bd.run(sql,[tarefa.TITULO,
                tarefa.DESCRICAO,
                tarefa.STATUS,
                tarefa.DATACRIACAO,
                tarefa.ID_USUARIO],erro => erro? reject(erro): resolve('Tarefa Criada'))
                          
        })
  

        return promise;
    }
    atualizaTarefa(id,tarefas,res){
        const promise = new Promise((resolve,reject) => {
            const sql = `UPDATE TAREFAS SET TITULO=?,DESCRICAO=?,STATUS=?,DATACRIACAO=?,ID_USUARIO=? where id= ?`;
            this.bd.run(sql,[tarefas.TITULO,
            tarefas.DESCRICAO,
            tarefas.STATUS,
            tarefas.DATACRIACAO,
            tarefas.ID_USUARIO,id],(erro) => erro? reject(erro):resolve({...tarefas,id}));
        })


        return promise;
    }
    deletaTarefa(res,id){
        const promise = new Promise((resolve,reject) => {  
            const sql = `DELETE FROM TAREFAS where id=?`;
            this.bd.all(sql,id,(erro) => {erro?reject(erro):resolve({'id':id})});
        })
   
        return promise;
    }    
}

module.exports =  TarefaDao;