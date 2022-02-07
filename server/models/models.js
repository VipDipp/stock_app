const sequelize = require('../db');
const { DataTypes } = require('sequelize');

const User = sequelize.define('user', {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    email: { type: DataTypes.STRING, unique: true },
    password: { type: DataTypes.STRING },
    balance: { type: DataTypes.INTEGER, defaultValue: 0 },
    role: { type: DataTypes.STRING, defaultValue: 'USER' }
})

const Bet = sequelize.define('bet', {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    quantity: { type: DataTypes.INTEGER },
    target: { type: DataTypes.INTEGER }
})

const Shapes = sequelize.define('shapes', {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true }
})

User.hasMany(Shapes);
Shapes.belongsTo(User);

User.hasOne(Bet);
Bet.belongsTo(User);

module.exports = {
    User,
    Bet,
    Shapes
}