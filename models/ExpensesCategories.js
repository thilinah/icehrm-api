/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('ExpensesCategories', {
    id: {
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    name: {
      type: DataTypes.STRING(500),
      allowNull: false
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
    pre_approve: {
      type: DataTypes.ENUM('Yes','No'),
      allowNull: true,
      defaultValue: 'Yes'
    }
  }, {
    tableName: 'ExpensesCategories'
  });
};
