'use strict';

var _ = require('lodash');
var Coffee = require('./coffee.model');

// Get list of coffees
exports.index = function(req, res) {
  Coffee.find(function (err, coffees) {
    if(err) { return handleError(res, err); }
    return res.json(200, coffees);
  });
};

// Get a single coffee
exports.show = function(req, res) {
  Coffee.findById(req.params.id, function (err, coffee) {
    if(err) { return handleError(res, err); }
    if(!coffee) { return res.send(404); }
    return res.json(coffee);
  });
};

// Creates a new coffee in the DB.
exports.create = function(req, res) {
  Coffee.create(req.body, function(err, coffee) {
    if(err) { return handleError(res, err); }
    return res.json(201, coffee);
  });
};

// Updates an existing coffee in the DB.
exports.update = function(req, res) {
  if(req.body._id) { delete req.body._id; }
  Coffee.findById(req.params.id, function (err, coffee) {
    if (err) { return handleError(res, err); }
    if(!coffee) { return res.send(404); }
    var updated = _.merge(coffee, req.body);
    updated.save(function (err) {
      if (err) { return handleError(res, err); }
      return res.json(200, coffee);
    });
  });
};

// Deletes a coffee from the DB.
exports.destroy = function(req, res) {
  Coffee.findById(req.params.id, function (err, coffee) {
    if(err) { return handleError(res, err); }
    if(!coffee) { return res.send(404); }
    coffee.remove(function(err) {
      if(err) { return handleError(res, err); }
      return res.send(204);
    });
  });
};

function handleError(res, err) {
  return res.send(500, err);
}