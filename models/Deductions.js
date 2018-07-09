/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('Deductions', {
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
    componentType: {
      type: DataTypes.STRING(250),
      allowNull: true
    },
    component: {
      type: DataTypes.STRING(250),
      allowNull: true
    },
    payrollColumn: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    rangeAmounts: {
      type: DataTypes.TEXT,
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
    tableName: 'Deductions'
  });
};
