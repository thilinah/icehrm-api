/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('EmployeeLeaveDays', {
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
    leave_date: {
      type: DataTypes.DATEONLY,
      allowNull: true,
      defaultValue: '0000-00-00'
    },
    leave_type: {
      type: DataTypes.ENUM('Full Day','Half Day - Morning','Half Day - Afternoon','1 Hour - Morning','2 Hours - Morning','3 Hours - Morning','1 Hour - Afternoon','2 Hours - Afternoon','3 Hours - Afternoon'),
      allowNull: false
    }
  }, {
    tableName: 'EmployeeLeaveDays'
  });
};
