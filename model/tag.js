module.exports = (sequelize, DataTypes) => {
    const tagModel = sequelize.define('tag', {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false,
            comment: '名称'
        }
    })
    tagModel.associate = (models) => {
        tagModel.belongsTo(models.articleModel)
    }
    return tagModel
}

