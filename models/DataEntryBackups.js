/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('DataEntryBackups', {
    id: {
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    tableType: {
      type: DataTypes.STRING(200),
      allowNull: true
    },
    data: {
      type: DataTypes.TEXT,
      allowNull: true
    }
  }, {
    tableName: 'DataEntryBackups'
  });
};
