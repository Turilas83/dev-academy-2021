const express = require("express");
const cors = require("cors");

const app = express();

// Gettt list of names as JSON
let employees = require(__dirname + "/names.json")

// Add CORS to allow cross-origin requests
app.use(cors());

// Default endpoint, returns response code 200 if up and running
app.get('/', (req, res, next) => {
    return res.status(200).json({ error: false, message: "OK" })
});

// Endpoint to get names ordered by most popular
app.get("/names/most-popular", (req, res, next) => {
  // sort by value
  employees.names.sort(function (a, b) {
    return( b.amount - a.amount);
  });
  return res.status(200).json(employees);
});

// Endpoint to get names ordered by alphabetical order
app.get("/names/alphabetical-order", (req, res, next) => {
  // sort by name
  employees.names.sort(function(a, b) {
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
  return res.status(200).json(employees);
});

// Endpoint to get total count of names
app.get("/names/count", (req, res, next) => {
  var count = 0;
  for (var key of employees.names) {
    if (key.amount) {
      count = count + key.amount;
    }
  }
  return res.status(200).json({ error: false, count: count });
});

// Endpoint to get name with given search parameter
app.get('/names/search/:name', (req, res, next) => {
  var name = req.params.name;
  // Makes first letter uppercase and others lowercase
  name.charAt(0).toUpperCase() + name.slice(1).toLowerCase();
  // Loop trough names and check if name matches with search parameter, if so return name and amount
  for (var key of employees.names) { 
    if (key.name == name) {
      return res.status(200).json({ name: key.name, amount: key.amount });
    } 
  }
});
const port = process.env.PORT || 9000;
app.listen(port, function(){
  console.log("Server is running on port 9000");
});
