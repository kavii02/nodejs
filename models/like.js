const dbConnection = require('../config/database');

class Like {
  constructor({ post_id, user_id }) {
    this.post_id = post_id;
    this.user_id = user_id;
  }

  save(callback) {
    const newLike = {
      post_id: this.post_id,
      user_id: this.user_id
    };

    dbConnection.query('INSERT INTO likes SET ?', newLike, callback);
  }
}

module.exports = Like;
