/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('CurrencyTypes', {
    id: {
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    code: {
      type: DataTypes.STRING(3),
      allowNull: false,
      defaultValue: '',
      unique: true
    },
    name: {
      type: DataTypes.STRING(70),
      allowNull: false,
      defaultValue: ''
    }
  }, {
    tableName: 'CurrencyTypes'
  });
};
