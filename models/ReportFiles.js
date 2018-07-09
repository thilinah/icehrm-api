/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('ReportFiles', {
    id: {
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    employee: {
      type: DataTypes.BIGINT,
      allowNull: true
    },
    name: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    attachment: {
      type: DataTypes.STRING(100),
      allowNull: false,
      unique: true
    },
    created: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: '0000-00-00 00:00:00'
    }
  }, {
    tableName: 'ReportFiles'
  });
};
