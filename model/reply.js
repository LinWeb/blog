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
            comment: '内容'
        },
    })
    replyModel.associate = (models) => {
        replyModel.belongsTo(models.commentModel)
        replyModel.belongsTo(models.userModel)
    }
    return replyModel
}