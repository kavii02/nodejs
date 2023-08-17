const fs = require('fs');
const dbConnection = require('../config/database'); 

exports.uploadPhoto = (req, res) => {
  if (!req.file) {
    return res.status(400).json({ message: 'No file uploaded' });
  }

  const image_data = req.file.buffer.toString('base64');
  const user_id = req.body.user_id;

  const newPhoto = {
    user_id,
    image_data: image_data
  };

  dbConnection.query('INSERT INTO photos SET ?', newPhoto, (err, result) => {
    if (err) {
      console.error(err);
      return res.status(500).json({ message: 'Error uploading photo' });
    }
    return res.status(200).json({ message: 'Photo uploaded successfully' });
  });
};
