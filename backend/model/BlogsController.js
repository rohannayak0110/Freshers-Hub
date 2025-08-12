const Blog = require('../model/BlogsModel');

//Create Blog
exports.createBlog = async (req, res) => {
    try {
        const { title, content, author } = req.body;

        if(!title || !content || !author) {
            return res.status(400).json({ error: 'All fields are required' });
        }

        const newBlog = new Blog({
            title,
            content,
            author,
        });

        const savedBlog = await newBlog.save();
        res.status(201).json({ success: true, date: savedBlog });
    } catch (error) {
        res.status(500).json({ error: 'Error creating blog', details: error.message });
    }
};

//Get all Blogs
exports.getBlogs = async (req, res) => {
    try {
        const blogs = await Blog.find();
        res.status(200).json({ success: true, data: blogs});
    } catch(error) {
        res.status(500).json({ success: false, message: 'Server error'});
    }
}