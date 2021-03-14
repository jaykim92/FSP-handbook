const router = require("express").Router();
const db = require("../models");

router.get("/articles", (req, res) => {
  db.Article.find({
    title: { $regex: new RegExp(req.query.q, "i") }
  })
    .then(articles => res.json(articles))
    .catch(err => res.status(422).end());
});

module.exports = router;
