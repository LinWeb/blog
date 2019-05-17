module.exports = (sequelize, DataTypes) => {
    const categoryModel = sequelize.define('category', {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false,
        }
    })
    categoryModel.associate = (models) => {
        categoryModel.belongsTo(models.articleModel)
    }
    return categoryModel
}
