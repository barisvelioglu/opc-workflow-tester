var express   = require('express');
var router    = express.Router();
var steps     = require('../test-steps');

router.get('/', function(req, res, next) {
  res.render('index', { title: 'CNC Test', steps : steps });
});

module.exports = router;