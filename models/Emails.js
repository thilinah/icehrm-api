/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('Emails', {
    id: {
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    subject: {
      type: DataTypes.STRING(300),
      allowNull: false
    },
    toEmail: {
      type: DataTypes.STRING(300),
      allowNull: false
    },
    template: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    params: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    cclist: {
      type: DataTypes.STRING(500),
      allowNull: true
    },
    bcclist: {
      type: DataTypes.STRING(500),
      allowNull: true
    },
    error: {
      type: DataTypes.STRING(500),
      allowNull: true
    },
    created: {
      type: DataTypes.DATE,
      allowNull: true,
      defaultValue: '0000-00-00 00:00:00'
    },
    updated: {
      type: DataTypes.DATE,
      allowNull: true,
      defaultValue: '0000-00-00 00:00:00'
    },
    status: {
      type: DataTypes.ENUM('Pending','Sent','Error'),
      allowNull: true,
      defaultValue: 'Pending'
    }
  }, {
    tableName: 'Emails'
  });
};
