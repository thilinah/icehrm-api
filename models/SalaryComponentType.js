/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('SalaryComponentType', {
    id: {
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    code: {
      type: DataTypes.STRING(10),
      allowNull: false
    },
    name: {
      type: DataTypes.STRING(100),
      allowNull: false
    }
  }, {
    tableName: 'SalaryComponentType'
  });
};
