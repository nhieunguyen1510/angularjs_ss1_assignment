'use strict';

var Q = require('q')
var dbConnection = require('../database/dbConnection')

var ProductService = {};

ProductService.getProducts = function getProducts(category) {
    var deferred = Q.defer();

    if (category) {
        dbConnection.query(
            "SELECT p.id, p.name, p.description, p.thumbnail, p.price FROM product p INNER JOIN category c ON p.category_id = c.id WHERE c.name = ?", category,
            function(err, result) {
                if (err) {
                    deferred.reject(err);
                } else {
                    deferred.resolve(result);
                }
            }
        );

        return deferred.promise;
    }

    dbConnection.query(
        "SELECT id, name, description, thumbnail, price FROM product",
        function(err, result) {
            if (err) {
                deferred.reject(err);
            } else {
                deferred.resolve(result);
            }
        }
    );

    return deferred.promise;
};

ProductService.getProduct = function getProduct(id) {
    var deferred = Q.defer();

    dbConnection.query(
        "SELECT p.id, p.name, p.description, p.thumbnail, p.price, c.name as category FROM product p INNER JOIN category c ON p.category_id = c.id WHERE p.id=?", id,
        function(err, result) {
            if (err) {
                deferred.reject(err);
            } else {
                deferred.resolve(result);
            }
        }
    );

    return deferred.promise;
}

module.exports = ProductService;