const {Model, DataTypes} = require('sequelize')

const ProductsModel = {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    price: {
        type: DataTypes.DECIMAL,
        allowNull: false
    },
    image: {
        type: DataTypes.STRING,
        allowNull: false
    },
    categoryId: {
        type: DataTypes.INTEGER,
        allowNull: false
    }
}

class Products extends Model {
    static associate(models) {
        this.belongsTo(models.Categories, {
            foreignKey: 'categoryId',
            as: 'category'
        })
    }
    static config(sequelize) {
        return {
            sequelize,
            modelName: 'Products',
            tableName: 'products',
            timestamps: true
        }
    }
}

module.exports = {Products, ProductsModel}