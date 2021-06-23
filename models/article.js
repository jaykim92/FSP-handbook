const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const articleSchema = new mongoose.Schema({
  title: { type: String, default: "" },
  content: { type: String, required: true, default: "" },
  tag: { type: String },
  category: {type: String, required: true},
  href: {type: String}
});

const Article = mongoose.model("Article", articleSchema);

module.exports = Article;
