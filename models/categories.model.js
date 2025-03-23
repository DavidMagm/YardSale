const {Model, DataTypes} = require('sequelize')

const CategoriesModel = {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false
    }
}

class Categories extends Model {
    static associate(models) {
        this.hasMany(models.Products, {
            foreignKey: 'categoryId',
            as: 'products'
        })
    }
    static config(sequelize) {
        return {
            sequelize,
            modelName: 'Categories',
            tableName: 'categories',
            timestamps: true
        }
    }
}

module.exports = {Categories, CategoriesModel}