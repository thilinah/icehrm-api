/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('EmployeeLeaves', {
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
    leave_type: {
      type: DataTypes.BIGINT,
      allowNull: false,
      references: {
        model: 'LeaveTypes',
        key: 'id'
      }
    },
    leave_period: {
      type: DataTypes.BIGINT,
      allowNull: false,
      references: {
        model: 'LeavePeriods',
        key: 'id'
      }
    },
    date_start: {
      type: DataTypes.DATEONLY,
      allowNull: true,
      defaultValue: '0000-00-00'
    },
    date_end: {
      type: DataTypes.DATEONLY,
      allowNull: true,
      defaultValue: '0000-00-00'
    },
    details: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    status: {
      type: DataTypes.ENUM('Approved','Pending','Rejected','Cancellation Requested','Cancelled','Processing'),
      allowNull: true,
      defaultValue: 'Pending'
    },
    attachment: {
      type: DataTypes.STRING(100),
      allowNull: true
    }
  }, {
    tableName: 'EmployeeLeaves'
  });
};
