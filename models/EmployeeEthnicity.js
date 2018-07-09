/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('EmployeeEthnicity', {
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
    ethnicity: {
      type: DataTypes.BIGINT,
      allowNull: false,
      references: {
        model: 'Ethnicity',
        key: 'id'
      }
    }
  }, {
    tableName: 'EmployeeEthnicity'
  });
};
