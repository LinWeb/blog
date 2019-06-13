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
            comment: '标题'
        },
        content: {
            type: DataTypes.TEXT,
            allowNull: false,
            comment: '内容'
        },
        readCount: {
            type: DataTypes.INTEGER,
            defaultValue: 0,
            comment: '浏览量'
        },
    })
    articleModel.associate = (models) => {
        articleModel.hasMany(models.categoryModel);
        articleModel.hasMany(models.tagModel);
        articleModel.hasMany(models.commentModel);
    }
    return articleModel
}
