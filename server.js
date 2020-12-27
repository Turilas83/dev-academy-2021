const express = require("express");
const bodyParser = require("body-parser");

const app = express();

var names = require(__dirname + "/names.json")

app.use(express.static(__dirname + '/public'));
app.use(bodyParser.urlencoded({extended: true}));

app.get("/most-popular", function(req, res){
  res.sendFile(__dirname + "/index.html");
  // sort by value
  names.names.sort(function (a, b) {
    return( b.amount - a.amount);
  });
  console.log(names);
  CountOfNames()
});

app.post("/search", function(req, res){
  const nameToSearch = req.body.nameSearch;
  for (var key of names.names) {
    if (key.name === nameToSearch) {
      console.log(key.amount);
      res.write("<p>Found " + key.amount + " workers named " + nameToSearch + "</p>");
      res.send();
    }
  }

});

app.get("/alphabetical-order", function(req, res){
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
  CountOfNames();
});

app.listen(3000, function(){
  console.log("Server is running on port 3000");
});

function CountOfNames() {
  var count = 0;
  for (var key of names.names) {
    if (key.amount) {
      count = count + key.amount;
    }
  }
  console.log(count);
};
