const express = require("express");
const bodyParser = require("body-parser");

const app = express();

var names = require(__dirname + "/names.json")

app.get("/", function(req, res){
  res.sendFile(__dirname + "/index.html");
  // sort by value
  names.names.sort(function (a, b) {
    return( b.amount - a.amount);
  });
  console.log(names);
});

app.get("/alpha", function(req, res){
  res.sendFile(__dirname + "/index.html");
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
  console.log(names);
  var count = 0;
  for (var key of names.names) {
    if (key.amount) {
      count = count + key.amount;
    }
  }
  console.log(count);

  for (var key of names.names) {
    if (key.name === "Timo") {
      console.log(key.amount);
    }
  }
});


app.post("/", function(req, res){

});

app.listen(3000, function(){
  console.log("Server is running on port 3000");
});
