/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('EmployeeTrainingSessions', {
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
    trainingSession: {
      type: DataTypes.BIGINT,
      allowNull: true,
      references: {
        model: 'TrainingSessions',
        key: 'id'
      }
    },
    feedBack: {
      type: DataTypes.STRING(1500),
      allowNull: true
    },
    status: {
      type: DataTypes.ENUM('Scheduled','Attended','Not-Attended','Completed'),
      allowNull: true,
      defaultValue: 'Scheduled'
    },
    proof: {
      type: DataTypes.STRING(300),
      allowNull: true
    }
  }, {
    tableName: 'EmployeeTrainingSessions'
  });
};
