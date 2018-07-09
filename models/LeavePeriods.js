/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('LeavePeriods', {
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
    date_start: {
      type: DataTypes.DATEONLY,
      allowNull: true,
      defaultValue: '0000-00-00'
    },
    date_end: {
      type: DataTypes.DATEONLY,
      allowNull: true,
      defaultValue: '0000-00-00'
    },
    status: {
      type: DataTypes.ENUM('Active','Inactive'),
      allowNull: true,
      defaultValue: 'Inactive'
    }
  }, {
    tableName: 'LeavePeriods'
  });
};
