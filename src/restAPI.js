const configExpress = require('./config/customExpress');
const port = 3000;


  
 const app = configExpress();
 app.listen(port, () => {
 console.log(`Example app listening at http://localhost:${port}`);
 });
  

