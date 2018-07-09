/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('PayrollEmployees', {
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
      },
      unique: true
    },
    pay_frequency: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    currency: {
      type: DataTypes.BIGINT,
      allowNull: true
    },
    deduction_exemptions: {
      type: DataTypes.STRING(250),
      allowNull: true
    },
    deduction_allowed: {
      type: DataTypes.STRING(250),
      allowNull: true
    },
    deduction_group: {
      type: DataTypes.BIGINT,
      allowNull: true,
      references: {
        model: 'DeductionGroup',
        key: 'id'
      }
    }
  }, {
    tableName: 'PayrollEmployees'
  });
};
