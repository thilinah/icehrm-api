/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('EmployeeImmigrations', {
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
    document: {
      type: DataTypes.BIGINT,
      allowNull: true,
      references: {
        model: 'ImmigrationDocuments',
        key: 'id'
      }
    },
    documentname: {
      type: DataTypes.STRING(150),
      allowNull: false
    },
    valid_until: {
      type: DataTypes.DATEONLY,
      allowNull: false
    },
    status: {
      type: DataTypes.ENUM('Active','Inactive','Draft'),
      allowNull: true,
      defaultValue: 'Active'
    },
    details: {
      type: DataTypes.TEXT,
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
    }
  }, {
    tableName: 'EmployeeImmigrations'
  });
};
