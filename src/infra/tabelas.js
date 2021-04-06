class Tabelas{
    init(conex){
        this.conex = conex;
        this.criaTabelas();
    }
    criaTabelas(){
        const sql = `
        CREATE TABLE IF NOT EXISTS usuario(
            id int PRIMARY KEY NOT NULL AUTO_INCREMENT,
            username varchar(100) NOT NULL,
            email varchar(255) NOT NULL,
            \`password\` varchar(255) NOT NULL);
        CREATE TABLE IF NOT EXISTS tarefas(
            id int PRIMARY KEY NOT NULL AUTO_INCREMENT,
            user_id int,
            name varchar(150) NOT NULL,
            status varchar(10) NOT NULL,
            description text,
            \`date\` date,
            FOREIGN KEY(user_id) references usuario(id));`;
        this.conex.query(sql,erro => {
            if(erro){
                console.log(erro);
            }
            else{
                console.log('tabelas criadas com sucesso');
            }
        })
    }
}

module.exports = new Tabelas;