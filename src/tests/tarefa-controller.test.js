const request = require('supertest');
const configExpress = require('../config/customExpress');
const app = configExpress();

request(app)
.get('/task')
.expect(200)
.end(function(err, res) {
  if (err) throw err; else console.log(res.body);
});

request(app)
.get('/task/1')
.expect(200)
.end(function(err, res) {
  if (err) throw err; else console.log(res.body);
});