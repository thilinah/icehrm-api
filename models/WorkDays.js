/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('WorkDays', {
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
    status: {
      type: DataTypes.ENUM('Full Day','Half Day','Non-working Day'),
      allowNull: true,
      defaultValue: 'Full Day'
    },
    country: {
      type: DataTypes.BIGINT,
      allowNull: true
    }
  }, {
    tableName: 'WorkDays'
  });
};
