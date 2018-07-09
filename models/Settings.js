/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('Settings', {
    id: {
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    name: {
      type: DataTypes.STRING(100),
      allowNull: false,
      unique: true
    },
    value: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    description: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    meta: {
      type: DataTypes.TEXT,
      allowNull: true
    }
  }, {
    tableName: 'Settings'
  });
};
