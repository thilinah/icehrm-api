/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('EmployeeForms', {
    id: {
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    employee: {
      type: DataTypes.BIGINT,
      allowNull: false,
      references: {
        model: 'Employees',
        key: 'id'
      }
    },
    form: {
      type: DataTypes.BIGINT,
      allowNull: false,
      references: {
        model: 'Forms',
        key: 'id'
      }
    },
    status: {
      type: DataTypes.ENUM('Pending','Completed'),
      allowNull: true,
      defaultValue: 'Pending'
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
    tableName: 'EmployeeForms'
  });
};
