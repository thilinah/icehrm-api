/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('TrainingSessions', {
    id: {
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    name: {
      type: DataTypes.STRING(300),
      allowNull: false
    },
    course: {
      type: DataTypes.BIGINT,
      allowNull: false,
      references: {
        model: 'Courses',
        key: 'id'
      }
    },
    description: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    scheduled: {
      type: DataTypes.DATE,
      allowNull: true,
      defaultValue: '0000-00-00 00:00:00'
    },
    dueDate: {
      type: DataTypes.DATE,
      allowNull: true,
      defaultValue: '0000-00-00 00:00:00'
    },
    deliveryMethod: {
      type: DataTypes.ENUM('Classroom','Self Study','Online'),
      allowNull: true,
      defaultValue: 'Classroom'
    },
    deliveryLocation: {
      type: DataTypes.STRING(500),
      allowNull: true
    },
    status: {
      type: DataTypes.ENUM('Pending','Approved','Completed','Cancelled'),
      allowNull: true,
      defaultValue: 'Pending'
    },
    attendanceType: {
      type: DataTypes.ENUM('Sign Up','Assign'),
      allowNull: true,
      defaultValue: 'Sign Up'
    },
    attachment: {
      type: DataTypes.STRING(300),
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
    requireProof: {
      type: DataTypes.ENUM('Yes','No'),
      allowNull: true,
      defaultValue: 'Yes'
    }
  }, {
    tableName: 'TrainingSessions'
  });
};
