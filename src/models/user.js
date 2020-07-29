'use strict';
const {
  Model
} = require('sequelize');
const bcrypt = require("bcrypt");

module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };

  User.init({
    username:{
      type : DataTypes.STRING,
      unique : true,
      allowNull : false
    },
    email: {
      type : DataTypes.STRING,
      unique : true,
      allowNull : false
    },
    password: {
      type : DataTypes.STRING,
    },
    // fullName: {
    //   type: DataTypes.VIRTUAL,
    //   get() {
    //     return `${this.username}${this.email}`;
    //   },
    //   set(value) {
    //     throw new Error('Do not try to set the `fullName` value!');
    //   }
    // },
    token : {
      type : DataTypes.STRING
    }
  }, 
  {
    sequelize,
    modelName: 'User',
  });

  User.beforeCreate(async (user,options)=>{
    const salt = await bcrypt.genSaltSync(10);
    user.password = await bcrypt.hashSync(user.getDataValue('password'),salt);
  })

  User.prototype.toJSON = function () {
      var values = Object.assign({}, this.get());

      delete values.password;
      delete values.passwordConfirm;

  return values;
};

  return User;
};