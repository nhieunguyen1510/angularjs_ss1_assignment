'use strict';

var express = require('express');
var Q = require('q');
var categoryService = require('../services/categoryService');

var router = express.Router();

router.get('/', function (req, res, next) {   
    Q.when()
    .then(function() {
        return categoryService.getCategories();
    })
    .then(function(data) {
        res.json(data);
    })
    .catch(function (err) {
        next(err);
    })
    .done();
});

module.exports = router;