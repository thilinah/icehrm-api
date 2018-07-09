/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('LeaveGroupEmployees', {
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
      },
      unique: true
    },
    leave_group: {
      type: DataTypes.BIGINT,
      allowNull: false,
      references: {
        model: 'LeaveGroups',
        key: 'id'
      }
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
    tableName: 'LeaveGroupEmployees'
  });
};
