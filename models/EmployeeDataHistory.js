/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('EmployeeDataHistory', {
    id: {
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    type: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    employee: {
      type: DataTypes.BIGINT,
      allowNull: false,
      references: {
        model: 'Employees',
        key: 'id'
      }
    },
    field: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    old_value: {
      type: DataTypes.STRING(500),
      allowNull: true
    },
    new_value: {
      type: DataTypes.STRING(500),
      allowNull: true
    },
    description: {
      type: DataTypes.STRING(800),
      allowNull: true
    },
    user: {
      type: DataTypes.BIGINT,
      allowNull: true,
      references: {
        model: 'Users',
        key: 'id'
      }
    },
    updated: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: '0000-00-00 00:00:00'
    },
    created: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: '0000-00-00 00:00:00'
    }
  }, {
    tableName: 'EmployeeDataHistory'
  });
};
