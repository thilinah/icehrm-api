/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('JobTitles', {
    id: {
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    code: {
      type: DataTypes.STRING(10),
      allowNull: false,
      defaultValue: ''
    },
    name: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    description: {
      type: DataTypes.STRING(200),
      allowNull: true
    },
    specification: {
      type: DataTypes.STRING(400),
      allowNull: true
    }
  }, {
    tableName: 'JobTitles'
  });
};
