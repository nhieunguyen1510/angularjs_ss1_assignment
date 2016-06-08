'use strict';

var Q = require('q')
var dbConnection = require('../database/dbConnection')

var ProductReviewService = {};

ProductReviewService.getReviews = function getReviews(productId) {
    var deferred = Q.defer();
    
    dbConnection.query(
        "SELECT id, starts, comment, author FROM product_review WHERE product_id = ?", productId, 
        function (err, result) {
            if(err) {
                 deferred.reject(err);
            } else {
                deferred.resolve(result);
            }
        }
    );
    
    return deferred.promise;
};

ProductReviewService.addReview = function addReview(review) {
    var deferred = Q.defer();
    
    dbConnection.query(
        "INSERT INTO product_review (product_id, starts, comment, author) VALUES (?, ?, ?, ?)", 
        [
            review.productId,
            review.starts,
            review.comment,
            review.author
        ],
        function (err, result) {
            if(err) {
                 deferred.reject(err);
            } else {
                deferred.resolve(result);
            }
        }
    );
    
    return deferred.promise;
};

module.exports = ProductReviewService;