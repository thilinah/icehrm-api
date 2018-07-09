/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('EmployeeSkills', {
    id: {
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    skill_id: {
      type: DataTypes.BIGINT,
      allowNull: true,
      references: {
        model: 'Skills',
        key: 'id'
      }
    },
    employee: {
      type: DataTypes.BIGINT,
      allowNull: false,
      references: {
        model: 'Employees',
        key: 'id'
      }
    },
    details: {
      type: DataTypes.STRING(400),
      allowNull: true
    }
  }, {
    tableName: 'EmployeeSkills'
  });
};
