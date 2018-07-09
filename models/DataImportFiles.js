/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('DataImportFiles', {
    id: {
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    name: {
      type: DataTypes.STRING(60),
      allowNull: false
    },
    data_import_definition: {
      type: DataTypes.STRING(200),
      allowNull: false
    },
    status: {
      type: DataTypes.STRING(15),
      allowNull: true
    },
    file: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    details: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    updated: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: '0000-00-00 00:00:00'
    },
    created: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: '0000-00-00 00:00:00'
    }
  }, {
    tableName: 'DataImportFiles'
  });
};
