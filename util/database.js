// const mysql= require('mysql2');

// const pool= mysql.createPool({
//   host: 'localhost',
//   user: 'root',
//   database:'node-complete',
//   password: 'Golu@1999'
// });

// module.exports= pool.promise();

const Sequelize= require('sequelize');

const sequelize= new Sequelize('node-complete', 'root', 'Golu@1999', {
  dialect: 'mysql',
  host: 'localhost'
});

module.exports= sequelize;