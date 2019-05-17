module.exports = (sequelize, DataTypes) => {
    const commentModel = sequelize.define('comment', {
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
        articleId: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
    })
    commentModel.associate = (models) => {
        commentModel.belongsTo(models.articleModel)
    }
    return commentModel
}