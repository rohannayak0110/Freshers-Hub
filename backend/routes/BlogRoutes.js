const express = require('express');
const router = express.Router();
const { createBlog } = require('../model/BlogsController');

router.post('/', createBlog);
module.exports = router;