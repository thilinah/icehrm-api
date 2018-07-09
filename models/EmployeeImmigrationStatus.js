/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('EmployeeImmigrationStatus', {
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
    status: {
      type: DataTypes.BIGINT,
      allowNull: false,
      references: {
        model: 'ImmigrationStatus',
        key: 'id'
      }
    }
  }, {
    tableName: 'EmployeeImmigrationStatus'
  });
};
