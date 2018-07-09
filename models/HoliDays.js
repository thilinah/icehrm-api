/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('HoliDays', {
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
    dateh: {
      type: DataTypes.DATEONLY,
      allowNull: true,
      defaultValue: '0000-00-00'
    },
    status: {
      type: DataTypes.ENUM('Full Day','Half Day'),
      allowNull: true,
      defaultValue: 'Full Day'
    },
    country: {
      type: DataTypes.BIGINT,
      allowNull: true
    }
  }, {
    tableName: 'HoliDays'
  });
};
