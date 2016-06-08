'use strict';

var Q = require('q')
var dbConnection = require('../database/dbConnection')

var CategoryService = {};

CategoryService.getCategories = function getCategories() {
    var deferred = Q.defer();
    
    dbConnection.query(
        "SELECT id, name FROM category", 
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

module.exports = CategoryService;