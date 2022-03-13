
var express = require('express');
var bodyParse = require('body-parser');
const app = express()
require('dotenv').config();

const PORT = process.env.PORT || 8080

// Getting Data in JSON formate

app.use(bodyParse.json());
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

//Importing Routes

const users = require('./routes/user');

//Using imported Routes

app.use('/api/v1/user', users);


//==================================================================================================================================

// To check if server is running
app.get('/', function (req,res) {
  console.log('route / is accessed.');
  res.send('Test');
});


//Listening on port 4500 or Port set in environment
app.listen(PORT, function () {
  console.log(`Server is running on port ${PORT}`);
});