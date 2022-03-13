const { DataTypes } = require('sequelize');

// We export a function that defines the model.
// This function will automatically receive as parameter the Sequelize connection object.
module.exports = (sequelize) => {
	sequelize.define('student', {
		// The following specification of the 'id' attribute could be omitted
		// since it is the default.
		id: {
			allowNull: false,
			autoIncrement: true,
			primaryKey: true,
			type: DataTypes.INTEGER
		},
			name: {
			allowNull: true,
			type: DataTypes.STRING,
		},
		email: {
			allowNull: true,
			type: DataTypes.STRING,
		},
		password: {
			allowNull: true,
			type: DataTypes.STRING,
		},
		phone: {
			allowNull: false,
			type: DataTypes.STRING,
		}
	
	});
};
