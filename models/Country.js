/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('Country', {
    id: {
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    code: {
      type: DataTypes.CHAR(2),
      allowNull: false,
      defaultValue: '',
      unique: true
    },
    namecap: {
      type: DataTypes.STRING(80),
      allowNull: true,
      defaultValue: ''
    },
    name: {
      type: DataTypes.STRING(80),
      allowNull: false,
      defaultValue: ''
    },
    iso3: {
      type: DataTypes.CHAR(3),
      allowNull: true
    },
    numcode: {
      type: DataTypes.INTEGER(6),
      allowNull: true
    }
  }, {
    tableName: 'Country'
  });
};
