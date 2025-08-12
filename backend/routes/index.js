const express = require('express');
const router = express.Router();
const authRoutes = require('./authRoute')
const BlogRoutes = require('./BlogRoutes')
// const nodemailer = require('nodemailer');
router.use('/auth', authRoutes)
router.use('/blogs', BlogRoutes)


// app.post('/send-email' , async(req, res) => {
//     const { email } = req.body;
//     const transporter = nodemailer.createTransport({

// })
// });
module.exports = router;