/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('Reports', {
    id: {
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    name: {
      type: DataTypes.STRING(100),
      allowNull: false,
      unique: true
    },
    details: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    parameters: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    query: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    paramOrder: {
      type: DataTypes.STRING(500),
      allowNull: false
    },
    type: {
      type: DataTypes.ENUM('Query','Class'),
      allowNull: true,
      defaultValue: 'Query'
    },
    report_group: {
      type: DataTypes.STRING(500),
      allowNull: true
    },
    output: {
      type: DataTypes.STRING(15),
      allowNull: false,
      defaultValue: 'CSV'
    }
  }, {
    tableName: 'Reports'
  });
};
