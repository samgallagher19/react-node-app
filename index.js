const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const path = require("path");
const postRoutes = require("./routes/postRoutes");

const PORT = process.env.PORT || 3001;

mongoose.connect("mongodb+srv://admin-sam:avKwhRBNQucuy76u@cluster0.9fmic.mongodb.net/?retryWrites=true&w=majority/blogDB");

const app = express();

app.use(express.static(path.resolve(__dirname, "./react-client/build")));

app.use(express.json());
app.use(express.urlencoded({
  extended: true
}));

app.use(cors());

app.use(express.static("public"));

app.options('*', cors());

app.use('/posts', postRoutes);

// All other GET requests not handled before will return our React app
app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, './react-client/build', 'index.html'));
  });

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});