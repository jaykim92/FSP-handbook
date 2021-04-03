const express = require("express");
const path = require("path");
const mongoose = require("mongoose");

const apiRoutes = require("./routes/apiRoutes");
const app = express();
const PORT = process.env.PORT || 3001;

// Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

// Connect to the Mongo DB
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/handbook", {
  useUnifiedTopology: true,
  useNewUrlParser: true,
  useCreateIndex: true
});

// Add routes, both API and view
app.use("/api", apiRoutes);

app.get("*", function (req, res) {
  res.sendFile(path.join(__dirname, "build", "index.html"));
});

// Start the API server
app.listen(PORT, function () {
  console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
});