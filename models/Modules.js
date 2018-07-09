/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('Modules', {
    id: {
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    menu: {
      type: DataTypes.STRING(30),
      allowNull: false
    },
    name: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    label: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    icon: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    mod_group: {
      type: DataTypes.STRING(30),
      allowNull: false
    },
    mod_order: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    status: {
      type: DataTypes.ENUM('Enabled','Disabled'),
      allowNull: true,
      defaultValue: 'Enabled'
    },
    version: {
      type: DataTypes.STRING(10),
      allowNull: true,
      defaultValue: ''
    },
    update_path: {
      type: DataTypes.STRING(500),
      allowNull: true,
      defaultValue: ''
    },
    user_levels: {
      type: DataTypes.STRING(500),
      allowNull: false
    },
    user_roles: {
      type: DataTypes.TEXT,
      allowNull: true
    }
  }, {
    tableName: 'Modules'
  });
};
