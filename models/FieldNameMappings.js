/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('FieldNameMappings', {
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
      allowNull: false,
      unique: true
    },
    textOrig: {
      type: DataTypes.STRING(200),
      allowNull: true
    },
    textMapped: {
      type: DataTypes.STRING(200),
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
    }
  }, {
    tableName: 'FieldNameMappings'
  });
};
