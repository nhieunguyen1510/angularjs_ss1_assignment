'use strict';

var express = require('express');
var Q = require('q');
var productService = require('../services/productService');
var productReviewService = require('../services/productReviewService');

var router = express.Router();

router.get('/', function (req, res, next) {
    var category = req.query.category;   
    Q.when()
    .then(function() {
        return productService.getProducts(category);
    })
    .then(function(data) {
        res.json(data);
    })
    .catch(function (err) {
        next(err);
    })
    .done();
});

router.get('/:id', function (req, res, next) {
    var id = req.params.id;  
    Q.when()
    .then(function() {
        return productService.getProduct(id);
    })
    .then(function(data) {
        res.json(data);
    })
    .catch(function (err) {
        next(err);
    })
    .done();
});

router.get('/:id/reviews', function (req, res, next) {
    var id = req.params.id;  
    Q.when()
    .then(function() {
        return productReviewService.getReviews(id);
    })
    .then(function(data) {
        res.json(data);
    })
    .catch(function (err) {
        next(err);
    })
    .done();
});

router.post('/:id/reviews', function (req, res, next) {
    var id = req.params.id;
    var review = req.body;
    review.productId = id;
    Q.when()
    .then(function() {
        return productReviewService.addReview(review);
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