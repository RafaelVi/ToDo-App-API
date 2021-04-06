const configExpress = require('./config/customExpress');
const conex = require('./infra/conexao');
const tabelas = require('./infra/tabelas');
const port = 3000;

conex.connect((erro)=>{
  if(erro){
    console.log(erro);
  }
  else{
    console.log('Sucesso');
    tabelas.init(conex);
    const app = configExpress();
    app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
    })
  }
});

