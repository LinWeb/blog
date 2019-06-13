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
            comment: '内容'
        },
    })
    commentModel.associate = (models) => {
        commentModel.belongsTo(models.articleModel)
        commentModel.belongsTo(models.userModel)
        commentModel.hasMany(models.replyModel)
    }
    return commentModel
}