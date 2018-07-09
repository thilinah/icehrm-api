/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('EmployeeProjects', {
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
    project: {
      type: DataTypes.BIGINT,
      allowNull: true,
      references: {
        model: 'Projects',
        key: 'id'
      }
    },
    date_start: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    date_end: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    status: {
      type: DataTypes.ENUM('Current','Inactive','Completed'),
      allowNull: true,
      defaultValue: 'Current'
    },
    details: {
      type: DataTypes.TEXT,
      allowNull: true
    }
  }, {
    tableName: 'EmployeeProjects'
  });
};
