/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('ArchivedEmployees', {
    id: {
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    ref_id: {
      type: DataTypes.BIGINT,
      allowNull: false
    },
    employee_id: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    first_name: {
      type: DataTypes.STRING(100),
      allowNull: false,
      defaultValue: ''
    },
    last_name: {
      type: DataTypes.STRING(100),
      allowNull: false,
      defaultValue: ''
    },
    gender: {
      type: DataTypes.ENUM('Male','Female'),
      allowNull: true
    },
    ssn_num: {
      type: DataTypes.STRING(100),
      allowNull: true,
      defaultValue: ''
    },
    nic_num: {
      type: DataTypes.STRING(100),
      allowNull: true,
      defaultValue: ''
    },
    other_id: {
      type: DataTypes.STRING(100),
      allowNull: true,
      defaultValue: ''
    },
    work_email: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    joined_date: {
      type: DataTypes.DATE,
      allowNull: true,
      defaultValue: '0000-00-00 00:00:00'
    },
    confirmation_date: {
      type: DataTypes.DATE,
      allowNull: true,
      defaultValue: '0000-00-00 00:00:00'
    },
    supervisor: {
      type: DataTypes.BIGINT,
      allowNull: true
    },
    department: {
      type: DataTypes.BIGINT,
      allowNull: true
    },
    termination_date: {
      type: DataTypes.DATE,
      allowNull: true,
      defaultValue: '0000-00-00 00:00:00'
    },
    notes: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    data: {
      type: DataTypes.TEXT,
      allowNull: true
    }
  }, {
    tableName: 'ArchivedEmployees'
  });
};
