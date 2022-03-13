require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const helmet = require('helmet');
const logger = require('morgan');

const app = express();

const port = process.env.PORT || 8080
const sequelize = require("./sequelize");
sequelize.sync();
// end

// Getting data in json format
app.use(bodyParser.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());


//Setting up cors

var cors = require('cors');
var corsOption = {
  origin: "*",
  methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
  credentials: true,
  exposedHeaders: ['x-auth-token']
};
app.use(cors(corsOption));

// Using Helmet

app.use(helmet());

// Logger

app.use(logger('logs'));

//Importing Routes

const students = require('./routes/students');

app.use('/api/v1/student', students);


// To check if server is running
app.get('/', function (req,res) {
  console.log('route / is accessed.');
  res.send('test');
});

app.listen(port, function () {
  console.log('Server is running on port ${port}');
});