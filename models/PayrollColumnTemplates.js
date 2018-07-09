/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('PayrollColumnTemplates', {
    id: {
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    name: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    columns: {
      type: DataTypes.STRING(500),
      allowNull: true
    }
  }, {
    tableName: 'PayrollColumnTemplates'
  });
};
