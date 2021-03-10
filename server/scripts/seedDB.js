const mongoose = require("mongoose");
const db = require("../models");

//empties out database and replaces it with data below
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/handbook");

const articleSeed = [];

db.Book.remove({})
  .then(() => db.Article.collection.insertMany(articleSeed))
  .then(data => {
    console.log(data.result.n + " records inserted");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });
