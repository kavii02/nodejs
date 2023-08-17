const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const secretKey = 'Secretkey'; 
const dbConnection = require('../config/database'); 
const User = require('../models/user'); 

exports.register = (req, res) => {
  const { name, email, username, password, gender } = req.body;

  const newUser = new User({
    name,
    email,
    username,
    password,
    gender
  });


  bcrypt.hash(newUser.password, 10, (err, hash) => {
    if (err) {
      console.error(err);
      return res.status(500).json({ message: 'Error during registration' });
    }
    newUser.password = hash;

    newUser.save((err, user) => {
      if (err) {
        console.error(err);
        return res.status(500).json({ message: 'Error registering user' });
      }
      return res.status(201).json({ message: 'User registered successfully' });
    });
  });
};


exports.login = (req, res) => {
  const { email, password } = req.body;

  User.findOne({ email }, (err, user) => {
    if (err) {
      console.error(err);
      return res.status(500).json({ message: 'Error during login' });
    }

    if (!user) {
      return res.status(401).json({ message: 'Email or password is incorrect' });
    }

    bcrypt.compare(password, user.password, (err, result) => {
      if (err || !result) {
        return res.status(401).json({ message: 'Email or password is incorrect' });
      }

      const token = jwt.sign({ userId: user._id }, secretKey, { expiresIn: '1h' });
      return res.status(200).json({ message: 'Login successful', token });
    });
  });
};
