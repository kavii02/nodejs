const dbConnection = require('../config/database'); 


exports.likePost = (req, res) => {
  const { post_id, user_id } = req.body;

  const newLike = {
    post_id,
    user_id
  };

  dbConnection.query('INSERT INTO likes SET ?', newLike, (err, result) => {
    if (err) {
      console.error(err);
      return res.status(500).json({ message: 'Error liking post' });
    }
    return res.status(200).json({ message: 'Post liked successfully' });
  });
};


exports.sharePost = (req, res) => {
  const { post_id, user_id } = req.body;

  const newShare = {
    post_id,
    user_id
  };

  dbConnection.query('INSERT INTO shares SET ?', newShare, (err, result) => {
    if (err) {
      console.error(err);
      return res.status(500).json({ message: 'Error sharing post' });
    }
    return res.status(201).json({ message: 'Post shared successfully' });
  });
};


exports.addComment = (req, res) => {
  const { post_id, user_id, content } = req.body;

  const newComment = {
    post_id,
    user_id,
    content
  };

  dbConnection.query('INSERT INTO comments SET ?', newComment, (err, result) => {
    if (err) {
      console.error(err);
      return res.status(500).json({ message: 'Error adding comment' });
    }
    return res.status(201).json({ message: 'Comment added successfully' });
  });
};
