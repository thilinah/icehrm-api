/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('Employees', {
    id: {
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    employee_id: {
      type: DataTypes.STRING(50),
      allowNull: true,
      unique: true
    },
    first_name: {
      type: DataTypes.STRING(100),
      allowNull: false,
      defaultValue: ''
    },
    middle_name: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    last_name: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    nationality: {
      type: DataTypes.BIGINT,
      allowNull: true,
      references: {
        model: 'Nationality',
        key: 'id'
      }
    },
    birthday: {
      type: DataTypes.DATEONLY,
      allowNull: true,
      defaultValue: '0000-00-00'
    },
    gender: {
      type: DataTypes.ENUM('Male','Female'),
      allowNull: true
    },
    marital_status: {
      type: DataTypes.ENUM('Married','Single','Divorced','Widowed','Other'),
      allowNull: true
    },
    ssn_num: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    nic_num: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    other_id: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    driving_license: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    driving_license_exp_date: {
      type: DataTypes.DATEONLY,
      allowNull: true,
      defaultValue: '0000-00-00'
    },
    employment_status: {
      type: DataTypes.BIGINT,
      allowNull: true,
      references: {
        model: 'EmploymentStatus',
        key: 'id'
      }
    },
    job_title: {
      type: DataTypes.BIGINT,
      allowNull: true,
      references: {
        model: 'JobTitles',
        key: 'id'
      }
    },
    pay_grade: {
      type: DataTypes.BIGINT,
      allowNull: true,
      references: {
        model: 'PayGrades',
        key: 'id'
      }
    },
    work_station_id: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    address1: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    address2: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    city: {
      type: DataTypes.STRING(150),
      allowNull: true
    },
    country: {
      type: DataTypes.CHAR(2),
      allowNull: true,
      references: {
        model: 'Country',
        key: 'code'
      }
    },
    province: {
      type: DataTypes.BIGINT,
      allowNull: true,
      references: {
        model: 'Province',
        key: 'id'
      }
    },
    postal_code: {
      type: DataTypes.STRING(20),
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
    work_phone: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    work_email: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    private_email: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    joined_date: {
      type: DataTypes.DATEONLY,
      allowNull: true,
      defaultValue: '0000-00-00'
    },
    confirmation_date: {
      type: DataTypes.DATEONLY,
      allowNull: true,
      defaultValue: '0000-00-00'
    },
    supervisor: {
      type: DataTypes.BIGINT,
      allowNull: true,
      references: {
        model: 'Employees',
        key: 'id'
      }
    },
    indirect_supervisors: {
      type: DataTypes.STRING(250),
      allowNull: true
    },
    department: {
      type: DataTypes.BIGINT,
      allowNull: true,
      references: {
        model: 'CompanyStructures',
        key: 'id'
      }
    },
    custom1: {
      type: DataTypes.STRING(250),
      allowNull: true
    },
    custom2: {
      type: DataTypes.STRING(250),
      allowNull: true
    },
    custom3: {
      type: DataTypes.STRING(250),
      allowNull: true
    },
    custom4: {
      type: DataTypes.STRING(250),
      allowNull: true
    },
    custom5: {
      type: DataTypes.STRING(250),
      allowNull: true
    },
    custom6: {
      type: DataTypes.STRING(250),
      allowNull: true
    },
    custom7: {
      type: DataTypes.STRING(250),
      allowNull: true
    },
    custom8: {
      type: DataTypes.STRING(250),
      allowNull: true
    },
    custom9: {
      type: DataTypes.STRING(250),
      allowNull: true
    },
    custom10: {
      type: DataTypes.STRING(250),
      allowNull: true
    },
    termination_date: {
      type: DataTypes.DATEONLY,
      allowNull: true,
      defaultValue: '0000-00-00'
    },
    notes: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    status: {
      type: DataTypes.ENUM('Active','Terminated'),
      allowNull: true,
      defaultValue: 'Active'
    },
    ethnicity: {
      type: DataTypes.BIGINT,
      allowNull: true
    },
    immigration_status: {
      type: DataTypes.BIGINT,
      allowNull: true
    },
    approver1: {
      type: DataTypes.BIGINT,
      allowNull: true
    },
    approver2: {
      type: DataTypes.BIGINT,
      allowNull: true
    },
    approver3: {
      type: DataTypes.BIGINT,
      allowNull: true
    }
  }, {
    tableName: 'Employees'
  });
};
