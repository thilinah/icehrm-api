/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('PayrollColumns', {
    id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    name: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    calculation_hook: {
      type: DataTypes.STRING(200),
      allowNull: true
    },
    salary_components: {
      type: DataTypes.STRING(500),
      allowNull: true
    },
    deductions: {
      type: DataTypes.STRING(500),
      allowNull: true
    },
    add_columns: {
      type: DataTypes.STRING(500),
      allowNull: true
    },
    sub_columns: {
      type: DataTypes.STRING(500),
      allowNull: true
    },
    colorder: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    editable: {
      type: DataTypes.ENUM('Yes','No'),
      allowNull: true,
      defaultValue: 'Yes'
    },
    enabled: {
      type: DataTypes.ENUM('Yes','No'),
      allowNull: true,
      defaultValue: 'Yes'
    },
    default_value: {
      type: DataTypes.STRING(25),
      allowNull: true
    },
    calculation_columns: {
      type: DataTypes.STRING(500),
      allowNull: true
    },
    calculation_function: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    deduction_group: {
      type: DataTypes.BIGINT,
      allowNull: true
    }
  }, {
    tableName: 'PayrollColumns'
  });
};
