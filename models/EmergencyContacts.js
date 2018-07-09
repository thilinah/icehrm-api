/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('EmergencyContacts', {
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
    name: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    relationship: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    home_phone: {
      type: DataTypes.STRING(15),
      allowNull: true
    },
    work_phone: {
      type: DataTypes.STRING(15),
      allowNull: true
    },
    mobile_phone: {
      type: DataTypes.STRING(15),
      allowNull: true
    }
  }, {
    tableName: 'EmergencyContacts'
  });
};
