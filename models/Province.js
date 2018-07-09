/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('Province', {
    id: {
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    name: {
      type: DataTypes.STRING(40),
      allowNull: false,
      defaultValue: ''
    },
    code: {
      type: DataTypes.CHAR(2),
      allowNull: false,
      defaultValue: ''
    },
    country: {
      type: DataTypes.CHAR(2),
      allowNull: false,
      defaultValue: 'US',
      references: {
        model: 'Country',
        key: 'code'
      }
    }
  }, {
    tableName: 'Province'
  });
};
