const { Sequelize } = require('sequelize');

exports.sequelize = new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASSWORD, {
	host: process.env.DB_HOST,
	port: process.env.DB_PORT,
	dialect: process.env.DB_DIALECT,
	operatorsAliases: false,
	define: {
        timestamps: true
    },
	pool: {
		max: 20,
		min: 0,
		idle: 5000
	},
  });