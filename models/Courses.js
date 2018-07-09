/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('Courses', {
    id: {
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    code: {
      type: DataTypes.STRING(300),
      allowNull: false
    },
    name: {
      type: DataTypes.STRING(300),
      allowNull: false
    },
    description: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    coordinator: {
      type: DataTypes.BIGINT,
      allowNull: true,
      references: {
        model: 'Employees',
        key: 'id'
      }
    },
    trainer: {
      type: DataTypes.STRING(300),
      allowNull: true
    },
    trainer_info: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    paymentType: {
      type: DataTypes.ENUM('Company Sponsored','Paid by Employee'),
      allowNull: true,
      defaultValue: 'Company Sponsored'
    },
    currency: {
      type: DataTypes.STRING(3),
      allowNull: true
    },
    cost: {
      type: DataTypes.DECIMAL,
      allowNull: true,
      defaultValue: '0.00'
    },
    status: {
      type: DataTypes.ENUM('Active','Inactive'),
      allowNull: true,
      defaultValue: 'Active'
    },
    created: {
      type: DataTypes.DATE,
      allowNull: true,
      defaultValue: '0000-00-00 00:00:00'
    },
    updated: {
      type: DataTypes.DATE,
      allowNull: true,
      defaultValue: '0000-00-00 00:00:00'
    }
  }, {
    tableName: 'Courses'
  });
};
