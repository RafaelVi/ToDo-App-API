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