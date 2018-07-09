/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('Notifications', {
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
    fromUser: {
      type: DataTypes.BIGINT,
      allowNull: true
    },
    fromEmployee: {
      type: DataTypes.BIGINT,
      allowNull: true
    },
    toUser: {
      type: DataTypes.BIGINT,
      allowNull: false,
      references: {
        model: 'Users',
        key: 'id'
      }
    },
    image: {
      type: DataTypes.STRING(500),
      allowNull: true
    },
    message: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    action: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    type: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    status: {
      type: DataTypes.ENUM('Unread','Read'),
      allowNull: true,
      defaultValue: 'Unread'
    },
    employee: {
      type: DataTypes.BIGINT,
      allowNull: true
    }
  }, {
    tableName: 'Notifications'
  });
};
