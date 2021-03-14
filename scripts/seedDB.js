const mongoose = require("mongoose");
const db = require("../models");

// This file empties the Books collection and inserts the books below
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/handbook");

// content to seed with
const articleSeed = [
  {
    title: "Introduction",
    content: "lorem ipsum blah blah",
    tag: "#introduction"
  },
  { title: "test", content: "test please work", tag: "#test" }
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
