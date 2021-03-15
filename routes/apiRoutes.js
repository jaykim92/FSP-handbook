const router = require("express").Router();
const db = require("../models");

// connects to /api/articles/
// make this into a regex looking for keywords in tag
// this will display on button click using the user's search paramaters
router.get("/articles", (req, res) => {
  db.Article.find({
    tag: { $regex: new RegExp(req.query.q, "i") }
  })
    .then(articles => res.json(articles))
    .catch(err => res.status(422).end());
});

// look for keywords in category
// this will display on load (using useEffect) for the introduction, roles, phases, ehr, dcr pages
router.get("/article", (req, res) => {
  db.Article.find({
    category: { $regex: new RegExp(req.query.q, "i") }
  })
    .then(articles => res.json(articles))
    .catch(err => res.status(422).end());
});

module.exports = router;
