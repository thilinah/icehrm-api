/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('Migrations', {
    id: {
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    file: {
      type: DataTypes.STRING(50),
      allowNull: false,
      unique: true
    },
    version: {
      type: DataTypes.INTEGER(11),
      allowNull: false
    },
    created: {
      type: DataTypes.DATE,
      allowNull: true,
      defaultValue: '0000-00-00 00:00:00'
    },
    updated: {
      type: DataTypes.DATE,
      allowNull: true,
      defaultValue: '0000-00-00 00:00:00'
    },
    status: {
      type: DataTypes.ENUM('Pending','Up','Down','UpError','DownError'),
      allowNull: true,
      defaultValue: 'Pending'
    },
    last_error: {
      type: DataTypes.STRING(500),
      allowNull: true
    }
  }, {
    tableName: 'Migrations'
  });
};
