const express = require("express");

const mongoose = require("mongoose");
const routes = require("./routes");
const app = express();
const PORT = process.env.PORT || 3001;

// define middleware
app.use(express.urlencoded({extended: true}));
app.use(express.json());

// serve up static assets on heroku
if (process.env.NODE_ENV === "production") {
    app.use(express.static("client/build"));
}

// add routes
app.use(routes);

// connnect to mongo db
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/handbook");

// start the api server
app.listen(PORT, function() {
    console.log(`API server now listening on PORT ${PORT}`)
})