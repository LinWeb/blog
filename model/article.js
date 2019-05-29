module.exports = (sequelize, DataTypes) => {
    const articleModel = sequelize.define('article', {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        title: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        content: {
            type: DataTypes.TEXT,
            allowNull: false,
        },
        readCount: {
            type: DataTypes.INTEGER,
            defaultValue: 0
        },
    })
    articleModel.associate = (models) => {
        articleModel.hasMany(models.categoryModel);
        articleModel.hasMany(models.tagModel);
        articleModel.hasMany(models.commentModel);
    }
    return articleModel
}
