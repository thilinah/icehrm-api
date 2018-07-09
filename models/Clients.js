/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('Clients', {
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
    details: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    first_contact_date: {
      type: DataTypes.DATEONLY,
      allowNull: true,
      defaultValue: '0000-00-00'
    },
    created: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: '0000-00-00 00:00:00'
    },
    address: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    contact_number: {
      type: DataTypes.STRING(25),
      allowNull: true
    },
    contact_email: {
      type: DataTypes.STRING(25),
      allowNull: true
    },
    company_url: {
      type: DataTypes.STRING(500),
      allowNull: true
    },
    status: {
      type: DataTypes.ENUM('Active','Inactive'),
      allowNull: true,
      defaultValue: 'Active'
    }
  }, {
    tableName: 'Clients'
  });
};
