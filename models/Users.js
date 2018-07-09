/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('Users', {
    id: {
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    username: {
      type: DataTypes.STRING(100),
      allowNull: true,
      unique: true
    },
    email: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    password: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    employee: {
      type: DataTypes.BIGINT,
      allowNull: true,
      references: {
        model: 'Employees',
        key: 'id'
      }
    },
    default_module: {
      type: DataTypes.BIGINT,
      allowNull: true
    },
    user_level: {
      type: DataTypes.ENUM('Admin','Employee','Manager','Other'),
      allowNull: true
    },
    user_roles: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    last_login: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: '0000-00-00 00:00:00'
    },
    last_update: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: '0000-00-00 00:00:00'
    },
    created: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: '0000-00-00 00:00:00'
    },
    login_hash: {
      type: DataTypes.STRING(64),
      allowNull: true
    },
    lang: {
      type: DataTypes.BIGINT,
      allowNull: true,
      references: {
        model: 'SupportedLanguages',
        key: 'id'
      }
    }
  }, {
      tableName: 'Users',
      timestamps: false,
  });
};
