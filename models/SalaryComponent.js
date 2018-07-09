/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('SalaryComponent', {
    id: {
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    name: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    componentType: {
      type: DataTypes.BIGINT,
      allowNull: true,
      references: {
        model: 'SalaryComponentType',
        key: 'id'
      }
    },
    details: {
      type: DataTypes.TEXT,
      allowNull: true
    }
  }, {
    tableName: 'SalaryComponent'
  });
};
