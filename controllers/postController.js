const Post = require("../models/post.js");

const post_index = (req, res) => {
    Post.find({}, function(err, posts) {
        console.log(posts);
        res.json({ posts: posts });
    });
}

const post_create = (req, res) => {
    const d = new Date();

    const post = new Post({ title: req.body.title, content: req.body.content, status: req.body.status, timeLog: [{label: "Issue Created", date: d, user: req.body.user}]});

    post.save(function (err) {
        if (!err) {
            res.send("New post saved");
        } else {
            res.send(err);
        }
    });
}

const post_delete = (req, res) => {
    Post.deleteOne({'_id': req.body.id}, (err) => {
        if(!err) {
            res.send("Successfully deleted post.");
        } else {
            res.send(err);
        }
    });
}

const post_update = (req, res) => {
    const d = new Date();
    Post.updateOne({'_id': req.body.id}, {status : req.body.status, $push: { timeLog: { label: "Sent to " + req.body.status, date: d } }}, (err) => {
        if(!err) {
            res.send("Successfully updated post.");
        } else {
            res.send(err);
        }
    });
}

module.exports = {
    post_index,
    post_create,
    post_delete,
    post_update
}