/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('EducationLevel', {
    id: {
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    name: {
      type: DataTypes.STRING(250),
      allowNull: false,
      defaultValue: ''
    }
  }, {
    tableName: 'EducationLevel'
  });
};
