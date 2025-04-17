const {Model, DataTypes} = require('sequelize')

const CustomersModel = {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    lastName: {
        type: DataTypes.STRING,
        allowNull: false,
        field: 'last_name'
    },
    phone : {
        type: DataTypes.STRING,
        allowNull: false
    },
    userId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        field: 'user_id',
        references: {
            model: 'Users',
            key: 'id'
        }
    },
    createdAt: {
        type: DataTypes.DATE,
        allowNull: false,
        field: 'created_at',
        defaultValue: DataTypes.NOW
    },
}

class Customers extends Model {
    static associate(models) {
        this.belongsTo(models.Users, {
            foreignKey: 'userId',
            as: 'user'
        })
    }
    static config(sequelize) {
        return {
            sequelize,
            modelName: 'Customers',
            tableName: 'customers',
            timestamps: true
        }
    }
}

module.exports = {Customers, CustomersModel}