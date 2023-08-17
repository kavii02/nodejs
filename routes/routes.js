const express = require('express');
const router = express.Router();
const authController = require('../controllers/authController'); 
const photoController = require('../controllers/photoController'); 
const postController = require('../controllers/postController'); 


router.post('/register', authController.register);
router.post('/login', authController.login);


router.post('/uploadPhoto', photoController.uploadPhoto);


router.post('/likePost', postController.likePost);
router.post('/sharePost', postController.sharePost);
router.post('/addComment', postController.addComment);

module.exports = router;
