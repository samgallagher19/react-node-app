const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const path = require("path");

const PORT = process.env.PORT || 3001;

//mongoose.connect("mongodb://localhost:27017/blogDB");
mongoose.connect("mongodb+srv://admin-sam:avKwhRBNQucuy76u@cluster0.9fmic.mongodb.net/?retryWrites=true&w=majority/blogDB");

const postSchema = new mongoose.Schema({ title: String, content: String, status: String, timeLog: [{ label: String, date: Date }]});

const Post = mongoose.model("Post", postSchema);

const posts = ["Post 1 asdfaefja;oinfa ;sdlkn ;aodfn a;sdfja ;oeifn a;dfoina ;fnioawef", "Post 2 a;sdoin a;sdn a;infa;doifnaw ;ef na;dfina;woifn as;dofina; oifna f", "Post 3 a;sodifna ;afn;woina;dinf ;aonf a;soinf a;ewoinfa ;sdoifna ;odfina w"];

const app = express();

app.use(express.static(path.resolve(__dirname, "./react-client/build")));

app.use(express.json());
app.use(express.urlencoded({
  extended: true
}));

app.use(cors());

app.use(express.static("public"));

app.options('*', cors())

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
    const d = new Date();

    const post = new Post({ title: req.body.title, content: req.body.content, status: req.body.status, timeLog: [{label: "Issue Created", date: d}]});

    post.save(function (err) {
        if (!err) {
            res.send("New post saved");
        } else {
            res.send(err);
        }
    });
});

app.delete("/posts", (req, res) => {
    console.log(req.body.id);
    Post.deleteOne({'_id': req.body.id}, (err) => {
        if(!err) {
            res.send("Successfully deleted post.");
        } else {
            res.send(err);
        }
    });
});

app.patch("/posts", (req, res) => {
    console.log(req.body.id);
    const d = new Date();
    Post.updateOne({'_id': req.body.id}, {status : req.body.status, $push: { timeLog: { label: "Sent to " + req.body.status, date: d } }}, (err) => {
        if(!err) {
            res.send("Successfully updated post.");
        } else {
            res.send(err);
        }
    });
});

// All other GET requests not handled before will return our React app
app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, './react-client/build', 'index.html'));
  });

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});