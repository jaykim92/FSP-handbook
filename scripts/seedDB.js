const mongoose = require("mongoose");
const db = require("../models");

// This file empties the Books collection and inserts the books below
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/handbook");

// content to seed with
const articleSeed = [
  {
    title: "Introduction",
    content: "lorem ipsum blah blah",
    tag: "#introduction",
    category: "introduction"
  },
  {
    title: "Your first day",
    content: "on your first day you will want to locate emergency exits",
    tag: "#first day",
    category: "introduction"
  },
  { title: "intro test", content: "test please work", tag: "#intro test" }
];

db.Article.remove({})
  .then(() => db.Article.collection.insertMany(articleSeed))
  .then(data => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });
