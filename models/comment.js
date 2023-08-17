const dbConnection = require('../config/database');

class Comment {
  constructor({ post_id, user_id, content }) {
    this.post_id = post_id;
    this.user_id = user_id;
    this.content = content;
  }

  save(callback) {
    const newComment = {
      post_id: this.post_id,
      user_id: this.user_id,
      content: this.content
    };

    dbConnection.query('INSERT INTO comments SET ?', newComment, callback);
  }
}

module.exports = Comment;
