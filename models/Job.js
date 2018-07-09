/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('Job', {
    id: {
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    title: {
      type: DataTypes.STRING(200),
      allowNull: false
    },
    shortDescription: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    description: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    requirements: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    benefits: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    country: {
      type: DataTypes.BIGINT,
      allowNull: true
    },
    company: {
      type: DataTypes.BIGINT,
      allowNull: true
    },
    department: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    code: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    employementType: {
      type: DataTypes.BIGINT,
      allowNull: true
    },
    industry: {
      type: DataTypes.BIGINT,
      allowNull: true
    },
    experienceLevel: {
      type: DataTypes.BIGINT,
      allowNull: true
    },
    jobFunction: {
      type: DataTypes.BIGINT,
      allowNull: true
    },
    educationLevel: {
      type: DataTypes.BIGINT,
      allowNull: true
    },
    currency: {
      type: DataTypes.BIGINT,
      allowNull: true
    },
    showSalary: {
      type: DataTypes.ENUM('Yes','No'),
      allowNull: true
    },
    salaryMin: {
      type: DataTypes.BIGINT,
      allowNull: true
    },
    salaryMax: {
      type: DataTypes.BIGINT,
      allowNull: true
    },
    keywords: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    status: {
      type: DataTypes.ENUM('Active','On hold','Closed'),
      allowNull: true
    },
    closingDate: {
      type: DataTypes.DATE,
      allowNull: true,
      defaultValue: '0000-00-00 00:00:00'
    },
    attachment: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    display: {
      type: DataTypes.STRING(200),
      allowNull: false
    },
    postedBy: {
      type: DataTypes.BIGINT,
      allowNull: true
    }
  }, {
    tableName: 'Job'
  });
};
