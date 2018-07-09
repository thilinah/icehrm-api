/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('DeductionGroup', {
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
    description: {
      type: DataTypes.STRING(100),
      allowNull: false
    }
  }, {
    tableName: 'DeductionGroup'
  });
};
