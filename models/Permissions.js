/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('Permissions', {
    id: {
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    user_level: {
      type: DataTypes.ENUM('Admin','Employee','Manager'),
      allowNull: true
    },
    module_id: {
      type: DataTypes.BIGINT,
      allowNull: false
    },
    permission: {
      type: DataTypes.STRING(200),
      allowNull: true
    },
    meta: {
      type: DataTypes.STRING(500),
      allowNull: true
    },
    value: {
      type: DataTypes.STRING(200),
      allowNull: true
    }
  }, {
    tableName: 'Permissions'
  });
};
