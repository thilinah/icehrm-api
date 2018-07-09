/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('DataImport', {
    id: {
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    name: {
      type: DataTypes.STRING(60),
      allowNull: false
    },
    dataType: {
      type: DataTypes.STRING(60),
      allowNull: false
    },
    details: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    columns: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    updated: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: '0000-00-00 00:00:00'
    },
    created: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: '0000-00-00 00:00:00'
    }
  }, {
    tableName: 'DataImport'
  });
};
