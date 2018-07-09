/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('EmployeeTimeEntry', {
    id: {
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    project: {
      type: DataTypes.BIGINT,
      allowNull: true,
      references: {
        model: 'Projects',
        key: 'id'
      }
    },
    employee: {
      type: DataTypes.BIGINT,
      allowNull: false,
      references: {
        model: 'Employees',
        key: 'id'
      }
    },
    timesheet: {
      type: DataTypes.BIGINT,
      allowNull: false,
      references: {
        model: 'EmployeeTimeSheets',
        key: 'id'
      }
    },
    details: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    created: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: '0000-00-00 00:00:00'
    },
    date_start: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: '0000-00-00 00:00:00'
    },
    time_start: {
      type: DataTypes.STRING(10),
      allowNull: false
    },
    date_end: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: '0000-00-00 00:00:00'
    },
    time_end: {
      type: DataTypes.STRING(10),
      allowNull: false
    },
    status: {
      type: DataTypes.ENUM('Active','Inactive'),
      allowNull: true,
      defaultValue: 'Active'
    }
  }, {
    tableName: 'EmployeeTimeEntry'
  });
};
