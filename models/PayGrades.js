/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('PayGrades', {
    id: {
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    name: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    currency: {
      type: DataTypes.STRING(3),
      allowNull: false,
      references: {
        model: 'CurrencyTypes',
        key: 'code'
      }
    },
    min_salary: {
      type: DataTypes.DECIMAL,
      allowNull: true,
      defaultValue: '0.00'
    },
    max_salary: {
      type: DataTypes.DECIMAL,
      allowNull: true,
      defaultValue: '0.00'
    }
  }, {
    tableName: 'PayGrades'
  });
};
