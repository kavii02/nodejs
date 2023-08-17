const dbConnection = require('../config/database');

class Share {
  constructor({ post_id, user_id }) {
    this.post_id = post_id;
    this.user_id = user_id;
  }

  save(callback) {
    const newShare = {
      post_id: this.post_id,
      user_id: this.user_id
    };

    dbConnection.query('INSERT INTO shares SET ?', newShare, callback);
  }
}

module.exports = Share;
