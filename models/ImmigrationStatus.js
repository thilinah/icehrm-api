/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('ImmigrationStatus', {
    id: {
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    name: {
      type: DataTypes.STRING(100),
      allowNull: false
    }
  }, {
    tableName: 'ImmigrationStatus'
  });
};
