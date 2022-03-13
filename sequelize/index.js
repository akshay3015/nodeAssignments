sequeliz =	require('./db').sequelize
const fs = require('fs');
const path = require('path');

const sequelize = sequeliz;

  var normalizedPath = require("path").join(__dirname, "models");

  const modelDefiners = [];
  fs.readdirSync(normalizedPath).forEach(function(file) {
	require("./models/" + file);
	modelDefiners.push(require("./models/" + file));
  });

for (const modelDefiner of modelDefiners) {
	modelDefiner(sequelize);
}
module.exports = sequelize;
