/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('CustomFieldValues', {
    id: {
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    type: {
      type: DataTypes.STRING(20),
      allowNull: false
    },
    name: {
      type: DataTypes.STRING(60),
      allowNull: false
    },
    object_id: {
      type: DataTypes.STRING(60),
      allowNull: false
    },
    value: {
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
    tableName: 'CustomFieldValues'
  });
};
