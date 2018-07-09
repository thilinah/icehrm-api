/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('EmployeeLanguages', {
    id: {
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    language_id: {
      type: DataTypes.BIGINT,
      allowNull: true,
      references: {
        model: 'Languages',
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
    reading: {
      type: DataTypes.ENUM('Elementary Proficiency','Limited Working Proficiency','Professional Working Proficiency','Full Professional Proficiency','Native or Bilingual Proficiency'),
      allowNull: true
    },
    speaking: {
      type: DataTypes.ENUM('Elementary Proficiency','Limited Working Proficiency','Professional Working Proficiency','Full Professional Proficiency','Native or Bilingual Proficiency'),
      allowNull: true
    },
    writing: {
      type: DataTypes.ENUM('Elementary Proficiency','Limited Working Proficiency','Professional Working Proficiency','Full Professional Proficiency','Native or Bilingual Proficiency'),
      allowNull: true
    },
    understanding: {
      type: DataTypes.ENUM('Elementary Proficiency','Limited Working Proficiency','Professional Working Proficiency','Full Professional Proficiency','Native or Bilingual Proficiency'),
      allowNull: true
    }
  }, {
    tableName: 'EmployeeLanguages'
  });
};
