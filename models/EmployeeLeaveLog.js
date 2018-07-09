/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('EmployeeLeaveLog', {
    id: {
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    employee_leave: {
      type: DataTypes.BIGINT,
      allowNull: false,
      references: {
        model: 'EmployeeLeaves',
        key: 'id'
      }
    },
    user_id: {
      type: DataTypes.BIGINT,
      allowNull: true,
      references: {
        model: 'Users',
        key: 'id'
      }
    },
    data: {
      type: DataTypes.STRING(500),
      allowNull: false
    },
    status_from: {
      type: DataTypes.ENUM('Approved','Pending','Rejected','Cancellation Requested','Cancelled','Processing'),
      allowNull: true,
      defaultValue: 'Pending'
    },
    status_to: {
      type: DataTypes.ENUM('Approved','Pending','Rejected','Cancellation Requested','Cancelled','Processing'),
      allowNull: true,
      defaultValue: 'Pending'
    },
    created: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: '0000-00-00 00:00:00'
    }
  }, {
    tableName: 'EmployeeLeaveLog'
  });
};
