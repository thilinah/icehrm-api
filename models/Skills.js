/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('Skills', {
    id: {
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    name: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    description: {
      type: DataTypes.STRING(400),
      allowNull: true
    }
  }, {
    tableName: 'Skills'
  });
};
