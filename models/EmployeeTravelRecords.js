/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('EmployeeTravelRecords', {
    id: {
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    employee: {
      type: DataTypes.BIGINT,
      allowNull: false,
      references: {
        model: 'Employees',
        key: 'id'
      }
    },
    type: {
      type: DataTypes.ENUM('Local','International'),
      allowNull: true,
      defaultValue: 'Local'
    },
    purpose: {
      type: DataTypes.STRING(200),
      allowNull: false
    },
    travel_from: {
      type: DataTypes.STRING(200),
      allowNull: false
    },
    travel_to: {
      type: DataTypes.STRING(200),
      allowNull: false
    },
    travel_date: {
      type: DataTypes.DATE,
      allowNull: true,
      defaultValue: '0000-00-00 00:00:00'
    },
    return_date: {
      type: DataTypes.DATE,
      allowNull: true,
      defaultValue: '0000-00-00 00:00:00'
    },
    details: {
      type: DataTypes.STRING(500),
      allowNull: true
    },
    funding: {
      type: DataTypes.DECIMAL,
      allowNull: true
    },
    currency: {
      type: DataTypes.BIGINT,
      allowNull: true
    },
    attachment1: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    attachment2: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    attachment3: {
      type: DataTypes.STRING(100),
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
      type: DataTypes.ENUM('Approved','Pending','Rejected','Cancellation Requested','Cancelled','Processing'),
      allowNull: true,
      defaultValue: 'Pending'
    }
  }, {
    tableName: 'EmployeeTravelRecords'
  });
};
