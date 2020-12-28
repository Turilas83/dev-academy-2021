const express = require("express");
const bodyParser = require("body-parser");

const app = express();

var names = require(__dirname + "/names.json")

app.use(bodyParser.urlencoded({extended: true}));

app.get('/', (req, res, next) => {
    return res.status(200).json({ error: false, message: "OK" })
});

// Endpoint to get names ordered by most popular
app.get("/names/most-popular", (req, res, next) => {
  // sort by value
  names.names.sort(function (a, b) {
    return( b.amount - a.amount);
  });
  return res.status(200).json(names);
});

// Endpoint to get names ordered by alphabetcal order
app.get("/names/alphabetical-order", (req, res, next) => {
  // sort by name
  names.names.sort(function(a, b) {
    var nameA = a.name.toUpperCase(); // ignore upper and lowercase
    var nameB = b.name.toUpperCase(); // ignore upper and lowercase
    if (nameA < nameB) {
      return -1;
    }
    if (nameA > nameB) {
      return 1;
    }
    // names must be equal
    return 0;
  });
  return res.status(200).json(names);
});

// Endpoint to get total count of names
app.get("/names/count", (req, res, next) => {
  var count = 0;
  for (var key of names.names) {
    if (key.amount) {
      count = count + key.amount;
    }
  }
  return res.status(200).json({ error: false, count: count });
});

// Endpoint to get name with given search parameter
app.get('/names/search/:name', (req, res, next) => {
  let name = req.params.name;
  name.charAt(0).toUpperCase() + name.slice(1).toLowerCase();
  for (var key of names.names) {
    if (key.name === name) {
      return res.status(200).json({ name: key.name, amount: key.amount });
    }
  }
});

app.listen(3000, function(){
  console.log("Server is running on port 3000");
});
