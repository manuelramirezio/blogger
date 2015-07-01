/**
 * Module dependencies.
 */
var express        = require('express'),
	morgan         = require('morgan'),
	bodyParser     = require('body-parser'),
	session        = require('express-session'),
	methodOverride = require('method-override'),
	cookieParser   = require('cookie-parser'),
	config         = require('./config'),
	path           = require('path'),
	consolidate    = require('consolidate'),
	swig 		   = require('swig'),
	router	       = express.Router,
	configuration  = config.configuration;

module.exports = function(db) {
	// Initialize express app
	var app = express();
	// Showing stack errors
	app.set('showStackError', true);

	// include schema models
	config.requireFiles('server/models', '../server/models/');

	// Set swig as the template engine
	app.set('PORT' , (process.env.PORT || configuration.server.PORT))
		// Set swig as the template engine
		.engine('html', consolidate.swig)
		// Set views path and view engine
		.set('view engine', 'html')
		.set('views' , '../server/views')
	    // .set('view engine' , 'jade')
		.use(bodyParser.urlencoded({ extended: true }))
		.use(bodyParser.json()) //body parsing middleware should be above methodOverride
		.use(cookieParser())    // CookieParser should be above session
		.use(methodOverride())
		.use(express.static('./public'))
	

	// Environment dependent middleware
	if (process.env.NODE_ENV === 'development') {
		// Disable views cache
		app.set('view cache', false);
	} else if (process.env.NODE_ENV === 'production') {
		app.locals.cache = 'memory';
	}

	// use passport session
	// app.use(passport.initialize());
	// app.use(passport.session());

	// connect flash for flash messages
	// app.use(flash());

	// include routing files
	config.requireFiles('server/routes', '../server/routes/', app);

	app.use(function(req , res) {
		res.sendfile('public/main.html');
	});

	// Assume 'not found' in the error msgs is a 404. this is somewhat silly, but valid, you can do whatever you like, set properties, use instanceof etc.
	app.use(function(err, req, res, next) {
		// If the error object doesn't exists
		if (!err) return next();

		// Log it
		console.error(err.stack);
		// Error page
		res.status(500).render('505.server.view.html', {
			error: err.stack
		});
	});

	// // Assume 404 since no middleware responded
	app.use(function(req, res) {
		res.status(404).render('404.server.view.html', {
			url: req.originalUrl,
			error: 'Not Found'
		});
	});

	
	return app;
};
