/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('Payroll', {
    id: {
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    name: {
      type: DataTypes.STRING(200),
      allowNull: true
    },
    pay_period: {
      type: DataTypes.BIGINT,
      allowNull: false
    },
    department: {
      type: DataTypes.BIGINT,
      allowNull: false
    },
    column_template: {
      type: DataTypes.BIGINT,
      allowNull: true
    },
    columns: {
      type: DataTypes.STRING(500),
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
    },
    status: {
      type: DataTypes.ENUM('Draft','Completed','Processing'),
      allowNull: true,
      defaultValue: 'Draft'
    },
    payslipTemplate: {
      type: DataTypes.BIGINT,
      allowNull: true
    }
  }, {
    tableName: 'Payroll'
  });
};
