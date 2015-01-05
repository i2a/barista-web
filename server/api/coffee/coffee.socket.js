/**
 * Broadcast updates to client when the model changes
 */

'use strict';

var Coffee = require('./coffee.model');

exports.register = function(socket) {
  Coffee.schema.post('save', function (doc) {
    onSave(socket, doc);
  });
  Coffee.schema.post('remove', function (doc) {
    onRemove(socket, doc);
  });
}

function onSave(socket, doc, cb) {
  socket.emit('coffee:save', doc);
}

function onRemove(socket, doc, cb) {
  socket.emit('coffee:remove', doc);
}