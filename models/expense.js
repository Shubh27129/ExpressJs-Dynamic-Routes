const Sequelize = require('sequelize');

const sequelize = require('../util/database');

const Expense = sequelize.define('expense', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
      },
    amount: Sequelize.INTEGER,  
    desc:{
        type: Sequelize.STRING,
        
    },
    cat:{
        type: Sequelize.STRING,
        
    }
});

module.exports= Expense;