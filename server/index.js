const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");

const PORT = process.env.PORT || 3001;

mongoose.connect("mongodb://localhost:27017/blogDB");

const postSchema = new mongoose.Schema({ title: String, content: String, status: String});

const Post = mongoose.model("Post", postSchema);

const posts = ["Post 1 asdfaefja;oinfa ;sdlkn ;aodfn a;sdfja ;oeifn a;dfoina ;fnioawef", "Post 2 a;sdoin a;sdn a;infa;doifnaw ;ef na;dfina;woifn as;dofina; oifna f", "Post 3 a;sodifna ;afn;woina;dinf ;aonf a;soinf a;ewoinfa ;sdoifna ;odfina w"];

const app = express();

app.use(express.json());
app.use(express.urlencoded({
  extended: true
}));

app.use(cors());

app.use(express.static("public"));

app.get("/api", (req, res) => {
    res.json({ message: "Hello from server!" });
});

app.get("/posts", (req, res) => {
    Post.find({}, function(err, posts) {
        console.log(posts);
        res.json({ posts: posts });
    })
    
});

app.post("/posts", (req, res) => {
    console.log(req.body);
    //posts.push(req.body.username);
    console.log(posts);

    const post = new Post({ title: req.body.title, content: req.body.content, status: req.body.status});

    post.save(function (err) {
        if (!err) {console.log("New post saved");}
    });
});

app.delete("/posts", (req, res) => {
    console.log(req.body.id);
    Post.deleteOne({'_id': req.body.id}, (err) => {
        if(!err) {
            console.log("Successfully deleted post.");
        } else {
            console.log(err);
        }
    });
});

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});