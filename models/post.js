const dbConnection = require('../config/database');

class Post {
  constructor({ content, user_id }) {
    this.content = content;
    this.user_id = user_id;
  }

  save(callback) {
    const newPost = {
      content: this.content,
      user_id: this.user_id
    };

    dbConnection.query('INSERT INTO posts SET ?', newPost, callback);
  }
}

module.exports = Post;
