'use strict';

var express = require('express');
var controller = require('./user.controller');
var config = require('../../config/environment');
var auth = require('../../auth/auth.service');

var router = express.Router();

router.get('/', auth.hasRole('admin'), controller.index);
router.get('/:id', auth.isAuthenticated(), controller.show);
router.get('/me', auth.isAuthenticated(), controller.me);
router.delete('/:id', auth.hasRole('admin'), controller.destroy);
router.put('/:id/password', auth.isAuthenticated(), controller.changePassword);
router.post('/', controller.create);

module.exports = router;
