const {Model, DataTypes} = require('sequelize');

const UsersModel = {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false,
        undefined
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false
    },
    role: {
        type: DataTypes.STRING,
        allowNull: false
    },
    createdAt: {
        type: DataTypes.DATE,
        allowNull: false,
        field: 'created_at',
        defaultValue: DataTypes.NOW
    },
}

class Users extends Model {
    static associate(models) {
        // define association here
        this.hasOne(models.Customers, {
            foreignKey: 'userId',
            as: 'customer'
        })
    }
    static config(sequelize) {
        return {
            sequelize,
            modelName: 'Users',
            tableName: 'users',
            timestamps: true
        }
    }
}

module.exports = {Users, UsersModel}
