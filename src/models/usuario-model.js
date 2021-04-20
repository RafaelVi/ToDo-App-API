class Usuario{
    constructor(body){
        this.NOME = body.NOME;
        this.EMAIL = body.EMAIL;
        this.SENHA = body.SENHA;
    
    }
}

module.exports = Usuario;