const mongoose = require('mongoose');

const postSchema = new mongoose.Schema({ title: String, content: String, status: String, timeLog: [{ label: String, date: Date }]});

const Post = mongoose.model("Post", postSchema);

module.exports = Post;