/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('EmployeeOvertime', {
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
    start_time: {
      type: DataTypes.DATE,
      allowNull: true,
      defaultValue: '0000-00-00 00:00:00'
    },
    end_time: {
      type: DataTypes.DATE,
      allowNull: true,
      defaultValue: '0000-00-00 00:00:00'
    },
    category: {
      type: DataTypes.BIGINT,
      allowNull: false,
      references: {
        model: 'OvertimeCategories',
        key: 'id'
      }
    },
    project: {
      type: DataTypes.BIGINT,
      allowNull: true
    },
    notes: {
      type: DataTypes.TEXT,
      allowNull: true
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
    },
    status: {
      type: DataTypes.ENUM('Approved','Pending','Rejected','Cancellation Requested','Cancelled','Processing'),
      allowNull: true,
      defaultValue: 'Pending'
    }
  }, {
    tableName: 'EmployeeOvertime'
  });
};
