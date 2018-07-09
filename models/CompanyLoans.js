/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('CompanyLoans', {
    id: {
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    name: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    details: {
      type: DataTypes.TEXT,
      allowNull: true
    }
  }, {
    tableName: 'CompanyLoans'
  });
};
