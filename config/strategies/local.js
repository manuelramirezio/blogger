'use strict';

/**
 * Module dependencies.
 */
var passport = require('passport'),
	LocalStrategy = require('passport-local').Strategy,
	passwdHash = require('password-hash'),
	admin = require('../../server/models/admin.server.model');

module.exports = function() {
	// Use local strategy
	passport.use(new LocalStrategy(function(username, password, done) {
			admin.findOne({ username: username }, function (err, admin) {
				if (err) { 
					return done(err); 
				}
				if (!admin) {
					return done(null, false, { message: 'niki arasworia.' });
				}
				if (!passwdHash.verify(password, admin.passwdHash)) {
					return done(null, false, { message: 'paroli arasworia.' });
				}
				return done(null, admin);
			});
		}

	))
};