/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('CustomFields', {
    id: {
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    type: {
      type: DataTypes.STRING(20),
      allowNull: false
    },
    name: {
      type: DataTypes.STRING(20),
      allowNull: false
    },
    data: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    display: {
      type: DataTypes.ENUM('Form','Table and Form','Hidden'),
      allowNull: true,
      defaultValue: 'Form'
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
    },
    field_type: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    field_label: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    field_validation: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    field_options: {
      type: DataTypes.STRING(500),
      allowNull: true
    },
    display_order: {
      type: DataTypes.INTEGER(11),
      allowNull: true,
      defaultValue: '0'
    },
    display_section: {
      type: DataTypes.STRING(50),
      allowNull: true
    }
  }, {
    tableName: 'CustomFields'
  });
};
