const dbConnection = require('../config/database');

class User {
  constructor({ name, email, username, password, gender }) {
    this.name = name;
    this.email = email;
    this.username = username;
    this.password = password;
    this.gender = gender;
  }

  save(callback) {
    const newUser = {
      name: this.name,
      email: this.email,
      username: this.username,
      password: this.password,
      gender: this.gender
    };

    dbConnection.query('INSERT INTO register SET ?', newUser, callback);
  }
}

module.exports = User;
