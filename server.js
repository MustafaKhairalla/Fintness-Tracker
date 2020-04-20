var express = require("express");
var mongoose = require("mongoose");
const logger = require("morgan");

var app = express();
var PORT = process.env.PORT || 3000;

app.use(logger("dev"));

app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

require("./routes/apiRoutes")(app);
require("./routes/htmlRoutes")(app);

mongoose.connect(process.env.MONGODB_URI || "mongodb://mustafadb:mustafa123@ds139949.mlab.com:39949/heroku_4ntbt36g", {
    useNewUrlParser: true,
    useFindAndModify: false
});

app.listen(PORT, function () {
    console.log(`Now listening on port: ${PORT}`);
});
