/**
 * Created by yzdd on 2018/5/14.
 */
var knex = require('knex')({
  client: 'mysql',
  connection: {
    host: '127.0.0.1',
    user: 'root',
    password: '',
    database: 'wisdomTour'
  }
});
module.exports = knex;