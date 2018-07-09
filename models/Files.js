/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('Files', {
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
    filename: {
      type: DataTypes.STRING(100),
      allowNull: false,
      unique: true
    },
    employee: {
      type: DataTypes.BIGINT,
      allowNull: true
    },
    file_group: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    size: {
      type: DataTypes.BIGINT,
      allowNull: true
    },
    size_text: {
      type: DataTypes.STRING(20),
      allowNull: true
    }
  }, {
    tableName: 'Files'
  });
};
