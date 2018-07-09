/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('Calls', {
    id: {
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    job: {
      type: DataTypes.BIGINT,
      allowNull: false,
      references: {
        model: 'Job',
        key: 'id'
      }
    },
    candidate: {
      type: DataTypes.BIGINT,
      allowNull: true,
      references: {
        model: 'Candidates',
        key: 'id'
      }
    },
    phone: {
      type: DataTypes.STRING(20),
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
      type: DataTypes.STRING(100),
      allowNull: true
    },
    notes: {
      type: DataTypes.TEXT,
      allowNull: true
    }
  }, {
    tableName: 'Calls'
  });
};
