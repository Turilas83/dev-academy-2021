let employees = require(__dirname + "../names.json")


// Default endpoint, returns response code 200 if up and running
const defRoute = (req, res, next) => {
  res.status(200).json({ error: false, message: "OK" });
};

// Endpoint to get names ordered by most popular
const mostPopular = (req, res, next) => {
// sort by value
employees.names.sort(function (a, b) {
  return( b.amount - a.amount);
});
res.status(200).json(employees);
};

// Endpoint to get names ordered by alphabetical order
const alphabeticalOrder = (req, res, next) => {
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
res.status(200).json(employees);
};

// Endpoint to get total count of names
const nameCount = (req, res, next) => {
var count = 0;
for (var key of employees.names) {
  if (key.amount) {
    count = count + key.amount;
  }
}
res.status(200).json({ error: false, count: count });
};

// Endpoint to get name with given search parameter
const search = (req, res, next) => {
var name = req.params.name;
// Makes first letter uppercase and others lowercase
name.charAt(0).toUpperCase() + name.slice(1).toLowerCase();
// Loop trough names and check if name matches with search parameter, if so return name and amount
for (var key of employees.names) { 
  if (key.name == name) {
    res.status(200).json({ name: key.name, amount: key.amount });
  } 
}
};

module.exports.defRoute = defRoute;
module.exports.mostPopular = mostPopular;
module.exports.alphabeticalOrder = alphabeticalOrder;
module.exports.nameCount = nameCount;
module.exports.search = search;