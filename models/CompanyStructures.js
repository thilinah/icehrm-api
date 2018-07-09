/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('CompanyStructures', {
    id: {
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    title: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    description: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    address: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    type: {
      type: DataTypes.ENUM('Company','Head Office','Regional Office','Department','Unit','Sub Unit','Other'),
      allowNull: true
    },
    country: {
      type: DataTypes.STRING(2),
      allowNull: false,
      defaultValue: '0'
    },
    parent: {
      type: DataTypes.BIGINT,
      allowNull: true,
      references: {
        model: 'CompanyStructures',
        key: 'id'
      }
    },
    timezone: {
      type: DataTypes.STRING(100),
      allowNull: false,
      defaultValue: 'Europe/London'
    },
    heads: {
      type: DataTypes.STRING(255),
      allowNull: true
    }
  }, {
    tableName: 'CompanyStructures'
  });
};
