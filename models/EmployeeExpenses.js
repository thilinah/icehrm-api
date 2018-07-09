/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('EmployeeExpenses', {
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
    expense_date: {
      type: DataTypes.DATEONLY,
      allowNull: true,
      defaultValue: '0000-00-00'
    },
    payment_method: {
      type: DataTypes.BIGINT,
      allowNull: false,
      references: {
        model: 'ExpensesPaymentMethods',
        key: 'id'
      }
    },
    transaction_no: {
      type: DataTypes.STRING(300),
      allowNull: false
    },
    payee: {
      type: DataTypes.STRING(500),
      allowNull: false
    },
    category: {
      type: DataTypes.BIGINT,
      allowNull: false,
      references: {
        model: 'ExpensesCategories',
        key: 'id'
      }
    },
    notes: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    amount: {
      type: DataTypes.DECIMAL,
      allowNull: true
    },
    currency: {
      type: DataTypes.BIGINT,
      allowNull: true
    },
    attachment1: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    attachment2: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    attachment3: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    created: {
      type: DataTypes.DATE,
      allowNull: true,
      defaultValue: '0000-00-00 00:00:00'
    },
    updated: {
      type: DataTypes.DATE,
      allowNull: true,
      defaultValue: '0000-00-00 00:00:00'
    },
    status: {
      type: DataTypes.ENUM('Approved','Pending','Rejected','Cancellation Requested','Cancelled','Processing'),
      allowNull: true,
      defaultValue: 'Pending'
    }
  }, {
    tableName: 'EmployeeExpenses'
  });
};
