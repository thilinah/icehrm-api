/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('Projects', {
    id: {
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    name: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    client: {
      type: DataTypes.BIGINT,
      allowNull: true,
      references: {
        model: 'Clients',
        key: 'id'
      }
    },
    details: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    created: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: '0000-00-00 00:00:00'
    },
    status: {
      type: DataTypes.ENUM('Active','On Hold','Completed','Dropped'),
      allowNull: true,
      defaultValue: 'Active'
    }
  }, {
    tableName: 'Projects'
  });
};
