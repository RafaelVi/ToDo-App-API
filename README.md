# ToDo-App-API


<!---Esses são exemplos. Veja https://shields.io para outras pessoas ou para personalizar este conjunto de escudos. Você pode querer incluir dependências, status do projeto e informações de licença aqui--->

![GitHub repo size](https://img.shields.io/github/repo-size/RafaelVi/ToDo-App-Api)
![GitHub language count](https://img.shields.io/github/languages/count/RafaelVi/ToDo-App-Api)
![GitHub forks](https://img.shields.io/github/forks/RafaelVi/ToDo-App-Api)
![Bitbucket open pull requests](https://img.shields.io/bitbucket/pr-raw/RafaelVi/ToDo-App-Api)
![Github Issues](https://img.shields.io/github/issues/RafaelVi/ToDo-App-API)
![Language](https://img.shields.io/badge/Tecnologia-NodeJS-yellow)
![Database](https://img.shields.io/badge/Database-Sqlite-informational)


<img src="https://s3.amazonaws.com/ibc-portal/wp-content/uploads/2017/03/20152508/1-gestao-de-tarefas.jpg" alt="exemplo imagem">

> A api de ToDo é capaz de gerenciar usuários e tarefas realizando todas as operações CRUD. Organize-se e mantenha suas tarefas em dia !

### 🛠️ Ajustes e melhorias

O projeto ainda está em desenvolvimento e as próximas atualizações serão voltadas nas seguintes tarefas:

- [x] Implementação DAO;
- [x] Implementar Async/Await;
- [x] Implementar testes de GET nas Tarefas;
- [ ] Realizar verificação de rotas;
- [ ] Hospedar a API.

## 💻 Pré-requisitos

Antes de começar, verifique se você atendeu aos seguintes requisitos:
<!---Estes são apenas requisitos de exemplo. Adicionar, duplicar ou remover conforme necessário--->
* Você instalou a versão mais recente de `Node Package Manager(NPM) / Algum editor de texto(VSCode, Brackets , Sublime, etc..)`
* Você leu `este readme até o final`.

## 🚀 Instalando ToDo-App-Api

Para instalar o ToDo-App-Api, siga estas etapas:

De git clone no projeto:
```
git clone https://github.com/RafaelVi/ToDo-App-API
```
Depois disso, abra o terminal do seu computador e digite:
```npm
npm install
```

## ☕ Usando ToDo-App-Api

Para usar ToDo-App-Api, siga estas etapas:
execute no terminal
```
npm start
```
Execute os arquivos de teste para verificar o banco:
```
node ./src/tests/usuario-controller.test.js  
 
node ./src/tests/tarefa-controller.test.js 
```
Para manipular os usuários sera necessário utilizar programas como o Insomnia e Postman.
## 🛣️ Rotas da ToDo-App-Api

```
http://localhost:3000/user 
http://localhost:3000/task
```
Rotas GET (Buscar por ID), POST, PATCH e DELETE necessitam de um id como parametro:
```
http://localhost:3000/user/<id> 
http://localhost:3000/task/<id>
```


## 🤝 Colaboradores

Agradecemos às seguintes pessoas que contribuíram para este projeto:

<table>
  <tr>
    <td align="center">
      <a href="#">
        <img src="https://avatars3.githubusercontent.com/u/43658933" width="100px;" alt="Foto do Iuri Silva no GitHub"/><br>
        <sub>
          <b>Rafael Almeida</b>
        </sub>
      </a>
    </td>    
  </tr>
</table>


[⬆ Voltar ao topo](#ToDo-App-API)<br>
 