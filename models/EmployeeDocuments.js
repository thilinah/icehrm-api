/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('EmployeeDocuments', {
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
    document: {
      type: DataTypes.BIGINT,
      allowNull: true,
      references: {
        model: 'Documents',
        key: 'id'
      }
    },
    date_added: {
      type: DataTypes.DATEONLY,
      allowNull: false
    },
    valid_until: {
      type: DataTypes.DATEONLY,
      allowNull: false
    },
    status: {
      type: DataTypes.ENUM('Active','Inactive','Draft'),
      allowNull: true,
      defaultValue: 'Active'
    },
    details: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    attachment: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    signature: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    expire_notification_last: {
      type: DataTypes.INTEGER(4),
      allowNull: true
    }
  }, {
    tableName: 'EmployeeDocuments'
  });
};
