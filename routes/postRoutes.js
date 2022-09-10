const express = require('express');
const Post = require("../models/post.js");
const postController = require("../controllers/postController");

const router = express.Router();

router.get("/", postController.post_index);

router.post("/", postController.post_create);

router.delete("/", postController.post_delete);

router.patch("/", postController.post_update);

module.exports = router;