/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('Applications', {
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
    created: {
      type: DataTypes.DATE,
      allowNull: true,
      defaultValue: '0000-00-00 00:00:00'
    },
    referredByEmail: {
      type: DataTypes.STRING(200),
      allowNull: true
    },
    notes: {
      type: DataTypes.TEXT,
      allowNull: true
    }
  }, {
    tableName: 'Applications'
  });
};
