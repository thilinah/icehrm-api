/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('EmployeeDependents', {
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
    name: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    relationship: {
      type: DataTypes.ENUM('Child','Spouse','Parent','Other'),
      allowNull: true
    },
    dob: {
      type: DataTypes.DATEONLY,
      allowNull: true,
      defaultValue: '0000-00-00'
    },
    id_number: {
      type: DataTypes.STRING(25),
      allowNull: true
    }
  }, {
    tableName: 'EmployeeDependents'
  });
};
