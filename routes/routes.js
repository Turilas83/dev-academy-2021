const express = require('express');
const router = express.Router();
const controllers = require('./../controllers/controllers');

//router.get('/', controllers.defRoute);
router.get('/count', controllers.nameCount);
router.get('/most-popular', controllers.mostPopular);
router.get('/alphabetical-order', controllers.alphabeticalOrder);
router.get('/search', controllers.search);

module.exports = router;

//module.exports.defRoute = defRoute;
module.exports.mostPopular = mostPopular;
module.exports.alphabeticalOrder = alphabeticalOrder;
module.exports.nameCount = nameCount;
module.exports.search = search;