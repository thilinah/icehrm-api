/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('EmployeeCompanyLoans', {
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
    loan: {
      type: DataTypes.BIGINT,
      allowNull: true,
      references: {
        model: 'CompanyLoans',
        key: 'id'
      }
    },
    start_date: {
      type: DataTypes.DATEONLY,
      allowNull: false
    },
    last_installment_date: {
      type: DataTypes.DATEONLY,
      allowNull: false
    },
    period_months: {
      type: DataTypes.BIGINT,
      allowNull: true
    },
    currency: {
      type: DataTypes.BIGINT,
      allowNull: true
    },
    amount: {
      type: DataTypes.DECIMAL,
      allowNull: false
    },
    monthly_installment: {
      type: DataTypes.DECIMAL,
      allowNull: false
    },
    status: {
      type: DataTypes.ENUM('Approved','Repayment','Paid','Suspended'),
      allowNull: true,
      defaultValue: 'Approved'
    },
    details: {
      type: DataTypes.TEXT,
      allowNull: true
    }
  }, {
    tableName: 'EmployeeCompanyLoans'
  });
};
