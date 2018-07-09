/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('Crons', {
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
    class: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    lastrun: {
      type: DataTypes.DATE,
      allowNull: true,
      defaultValue: '0000-00-00 00:00:00'
    },
    frequency: {
      type: DataTypes.INTEGER(4),
      allowNull: false
    },
    time: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    type: {
      type: DataTypes.ENUM('Minutely','Hourly','Daily','Weekly','Monthly','Yearly'),
      allowNull: true,
      defaultValue: 'Hourly'
    },
    status: {
      type: DataTypes.ENUM('Enabled','Disabled'),
      allowNull: true,
      defaultValue: 'Enabled'
    }
  }, {
    tableName: 'Crons'
  });
};
