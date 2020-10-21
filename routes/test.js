var express = require('express');
var router  = express.Router();
var async   = require('async');

router.post('/start', function(req, res, next) {
    res.sendStatus(200);
});

module.exports = router;
