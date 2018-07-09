/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('PayrollData', {
    id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    payroll: {
      type: DataTypes.BIGINT,
      allowNull: false,
      references: {
        model: 'Payroll',
        key: 'id'
      }
    },
    employee: {
      type: DataTypes.BIGINT,
      allowNull: false
    },
    payroll_item: {
      type: DataTypes.INTEGER(11),
      allowNull: false
    },
    amount: {
      type: DataTypes.STRING(25),
      allowNull: true
    }
  }, {
    tableName: 'PayrollData'
  });
};
