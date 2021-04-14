class TarefaDao{
    constructor(bd){
        this.bd = bd;
    }
    listaTarefas(res){
        const promise = new Promise((resolve,reject) => {
            const sql = 'SELECT * FROM TAREFAS';
            this.bd.all(sql,(erro,results) => {
                erro? reject(erro):resolve(results);
            });
        })
        .then(results => res.send(results))
        .catch(err => {res.send(err);throw new Error(err)});

        return promise;
    }
    insereTarefa(tarefa,res){
        const promise = new Promise((resolve,reject) => {
            const sql = 'INSERT INTO TAREFAS(TITULO,DESCRICAO,STATUS,DATACRIACAO,ID_USUARIO) SET (?,?,?,?,?)';
            this.bd.run(sql,[tarefa.TITULO,
                tarefa.DESCRICAO,
                tarefa.STATUS,
                tarefa.DATACRIACAO,
                tarefa.ID_USUARIO],erro => erro? reject(erro): resolve('Tarefa Criada'))
                          
        })
        .then(response => res.status(201).send(response))
        .catch(err => {res.status(404).send(err);throw new Error(err)});

        return promise;
    }
}

module.exports =  TarefaDao;