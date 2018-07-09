/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('Candidates', {
    id: {
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
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
    nationality: {
      type: DataTypes.BIGINT,
      allowNull: true
    },
    birthday: {
      type: DataTypes.DATE,
      allowNull: true,
      defaultValue: '0000-00-00 00:00:00'
    },
    gender: {
      type: DataTypes.ENUM('Male','Female'),
      allowNull: true
    },
    marital_status: {
      type: DataTypes.ENUM('Married','Single','Divorced','Widowed','Other'),
      allowNull: true
    },
    address1: {
      type: DataTypes.STRING(100),
      allowNull: true,
      defaultValue: ''
    },
    address2: {
      type: DataTypes.STRING(100),
      allowNull: true,
      defaultValue: ''
    },
    city: {
      type: DataTypes.STRING(150),
      allowNull: true,
      defaultValue: ''
    },
    country: {
      type: DataTypes.CHAR(2),
      allowNull: true
    },
    province: {
      type: DataTypes.BIGINT,
      allowNull: true
    },
    postal_code: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    email: {
      type: DataTypes.STRING(200),
      allowNull: true
    },
    home_phone: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    mobile_phone: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    cv_title: {
      type: DataTypes.STRING(200),
      allowNull: false,
      defaultValue: ''
    },
    cv: {
      type: DataTypes.STRING(150),
      allowNull: true
    },
    cvtext: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    industry: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    profileImage: {
      type: DataTypes.STRING(150),
      allowNull: true
    },
    head_line: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    objective: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    work_history: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    education: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    skills: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    referees: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    linkedInUrl: {
      type: DataTypes.STRING(500),
      allowNull: true
    },
    linkedInData: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    totalYearsOfExperience: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    totalMonthsOfExperience: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    htmlCVData: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    generatedCVFile: {
      type: DataTypes.STRING(150),
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
    expectedSalary: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    preferedPositions: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    preferedJobtype: {
      type: DataTypes.STRING(60),
      allowNull: true
    },
    preferedCountries: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    tags: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    notes: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    calls: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    age: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    hash: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    linkedInProfileLink: {
      type: DataTypes.STRING(250),
      allowNull: true
    },
    linkedInProfileId: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    facebookProfileLink: {
      type: DataTypes.STRING(250),
      allowNull: true
    },
    facebookProfileId: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    twitterProfileLink: {
      type: DataTypes.STRING(250),
      allowNull: true
    },
    twitterProfileId: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    googleProfileLink: {
      type: DataTypes.STRING(250),
      allowNull: true
    },
    googleProfileId: {
      type: DataTypes.STRING(50),
      allowNull: true
    }
  }, {
    tableName: 'Candidates'
  });
};
