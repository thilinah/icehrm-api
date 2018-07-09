/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('EmployeeSalary', {
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
    component: {
      type: DataTypes.BIGINT,
      allowNull: false
    },
    pay_frequency: {
      type: DataTypes.ENUM('Hourly','Daily','Bi Weekly','Weekly','Semi Monthly','Monthly'),
      allowNull: true
    },
    currency: {
      type: DataTypes.BIGINT,
      allowNull: true,
      references: {
        model: 'CurrencyTypes',
        key: 'id'
      }
    },
    amount: {
      type: DataTypes.DECIMAL,
      allowNull: false
    },
    details: {
      type: DataTypes.TEXT,
      allowNull: true
    }
  }, {
    tableName: 'EmployeeSalary'
  });
};
