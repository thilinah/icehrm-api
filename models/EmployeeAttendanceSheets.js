/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('EmployeeAttendanceSheets', {
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
    date_start: {
      type: DataTypes.DATEONLY,
      allowNull: false
    },
    date_end: {
      type: DataTypes.DATEONLY,
      allowNull: false
    },
    status: {
      type: DataTypes.ENUM('Approved','Pending','Rejected','Submitted'),
      allowNull: true,
      defaultValue: 'Pending'
    }
  }, {
    tableName: 'EmployeeAttendanceSheets'
  });
};
