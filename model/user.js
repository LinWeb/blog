module.exports = (sequelize, DataTypes) => {
    const userModel = sequelize.define('user', {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        username: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true
        },
        password: {
            type: DataTypes.STRING,
            allowNull: false
        },
        auth: {
            type: DataTypes.BOOLEAN,
            defaultValue: 0
        }
    })
    return userModel
}