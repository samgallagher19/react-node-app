const mongoose = require('mongoose');

const postSchema = new mongoose.Schema({ title: String,
                                         content: String, 
                                         status: String, 
                                         timeLog: [{ key: String, label: String, date: Date, user: Object }],
                                         assignee: Object,
                                         comments: [{comment: String, date: Date, user: Object}]
                                        });

const Post = mongoose.model("Post", postSchema);

module.exports = Post;