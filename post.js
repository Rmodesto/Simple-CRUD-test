const express = require('express');
const { getPost, postComment } = require('../controllers/post');
const router = express.Router();




router.get('/blog', getPost)
router.post('/blog', postComment)



module.exports = router;