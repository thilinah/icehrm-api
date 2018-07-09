/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('Attendance', {
    id: {
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    employee: {
      type: DataTypes.BIGINT,
      allowNull: false,
      references: {
        model: 'Employees',
        key: 'id'
      }
    },
    in_time: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: '0000-00-00 00:00:00'
    },
    out_time: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: '0000-00-00 00:00:00'
    },
    note: {
      type: DataTypes.STRING(500),
      allowNull: true
    }
  }, {
    tableName: 'Attendance'
  });
};
