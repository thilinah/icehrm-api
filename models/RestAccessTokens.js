/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('RestAccessTokens', {
    id: {
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    userId: {
      type: DataTypes.BIGINT,
      allowNull: false,
      unique: true
    },
    hash: {
      type: DataTypes.STRING(32),
      allowNull: true
    },
    token: {
      type: DataTypes.STRING(500),
      allowNull: true
    },
    created: {
      type: DataTypes.DATE,
      allowNull: true,
      defaultValue: '0000-00-00 00:00:00'
    },
    updated: {
      type: DataTypes.DATE,
      allowNull: true,
      defaultValue: '0000-00-00 00:00:00'
    }
  }, {
    tableName: 'RestAccessTokens'
  });
};
