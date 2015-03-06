/**
 * Module dependencies.
 */
var express        = require('express'),
	morgan         = require('morgan'),
	bodyParser     = require('body-parser'),
	session        = require('express-session'),
	methodOverride = require('method-override'),
	cookieParser   = require('cookie-parser'),
	stylus         = require('stylus'),
	config         = require('./config'),
	path           = require('path'),
	consolidate    = require('consolidate'),
	swig 		   = require('swig'),
	router	       = express.Router

var allowCrossDomain = function(req, res, next) {
    res.header('Access-Control-Allow-Origin', 'http://localhost');
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
    res.header('Access-Control-Allow-Headers', 'Content-Type');

    next();
}

module.exports = function(db) {
	// Initialize express app
	var app = express();
	// Showing stack errors
	app.set('showStackError', true);

	// include  schema models
	require('../server/models/post.server.model');

	// Set swig as the template engine
	app.set('PORT' , (process.env.PORT || config.server.PORT))
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
		// .use(stylus.middleware('./public'))
		.use(express.static('./public'))
		.use(allowCrossDomain)
	

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


	// include routes
	require('../server/routes/post.server.route')(app);
	require('../server/routes/category.server.route')(app);
	
	// include routing files
	// config.getGlobbedFiles('../server/routes/**/*.js').forEach(function(routePath) {
	// 	require(path.resolve(routePath))(app);
	// });
	app.use(function(req , res) {
		res.sendfile('public/main.html');
	})
	// Assume 'not found' in the error msgs is a 404. this is somewhat silly, but valid, you can do whatever you like, set properties, use instanceof etc.
	// app.use(function(err, req, res, next) {
	// 	// If the error object doesn't exists
	// 	if (!err) return next();

	// 	// Log it
	// 	console.error(err.stack);

	// 	// Error page
	// 	res.status(500).render('500', {
	// 		error: err.stack
	// 	});
	// });

	// // Assume 404 since no middleware responded
	app.use(function(req, res) {
		res.status(404).render('404', {
			url: req.originalUrl,
			error: 'Not Found'
		});
	});

	
	return app;
};
