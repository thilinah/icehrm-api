/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('AuditLog', {
    id: {
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    time: {
      type: DataTypes.DATE,
      allowNull: true,
      defaultValue: '0000-00-00 00:00:00'
    },
    user: {
      type: DataTypes.BIGINT,
      allowNull: false,
      references: {
        model: 'Users',
        key: 'id'
      }
    },
    ip: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    type: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    employee: {
      type: DataTypes.STRING(300),
      allowNull: true
    },
    details: {
      type: DataTypes.TEXT,
      allowNull: true
    }
  }, {
    tableName: 'AuditLog'
  });
};
