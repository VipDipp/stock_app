const sequelize = require('../db');
const { DataTypes } = require('sequelize');

const User = sequelize.define('user', {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    email: { type: DataTypes.STRING, unique: true },
    password: { type: DataTypes.STRING },
    cash: { type: DataTypes.INTEGER, defaultValue: 0 },
    role: { type: DataTypes.STRING, defaultValue: 'USER' }
})

const Balance = sequelize.define('balance', {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true }
})

const Bet = sequelize.define('bet', {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    quantity: { type: DataTypes.INTEGER, defaultValue: 0 },
    target: { type: DataTypes.INTEGER, defaultValue: 0 }
})

const Shapes = sequelize.define('shapes', {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    shapes: { type: DataTypes.ARRAY(DataTypes.STRING), defaultValue: [] }
})

User.hasMany(Shapes);
Shapes.belongsTo(User);

User.hasOne(Bet);
Bet.belongsTo(User);

User.hasOne(Balance);
Balance.belongsTo(User);

module.exports = {
    User,
    Bet,
    Shapes,
    Balance
}