/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('EmployeeCertifications', {
    id: {
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    certification_id: {
      type: DataTypes.BIGINT,
      allowNull: true,
      references: {
        model: 'Certifications',
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
    institute: {
      type: DataTypes.STRING(400),
      allowNull: true
    },
    date_start: {
      type: DataTypes.DATEONLY,
      allowNull: true,
      defaultValue: '0000-00-00'
    },
    date_end: {
      type: DataTypes.DATEONLY,
      allowNull: true,
      defaultValue: '0000-00-00'
    }
  }, {
    tableName: 'EmployeeCertifications'
  });
};
