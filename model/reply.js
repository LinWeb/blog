module.exports = (sequelize, DataTypes) => {
    const replyModel = sequelize.define('reply', {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        content: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        userId: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        commentId: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
    })
    replyModel.associate = (models) => {
        replyModel.belongsTo(models.articleModel)
    }
    return replyModel
}