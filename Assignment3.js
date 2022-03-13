var http = require('http');
const { DataTypes } = require('sequelize');


const Sequelize = require('sequelize');

const connection = new Sequelize('studentsData', 'root', 'root',{
  host: 'localhost',
  dialect: 'mysql'
});

const Article = connection.define('article',{
  id:{
    allowNull: false,
    autoIncrement:true,
    primaryKey: true,
    type: DataTypes.INTEGER
  },
  title: DataTypes.STRING,
  content: DataTypes.STRING
});

connection.sync();




http.createServer(async function(req,res){
let Articles = await Article.findAll();

console.log(Articles);
  res.writeHead(200, {'Content-Type': 'text/palin'});
  res.write('test');

  res.end();
}).listen(8080);

console.log('server running at http://127.0.0.1:8080/');