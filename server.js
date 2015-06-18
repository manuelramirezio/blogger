


var express	       = require('express'),
	config	       = require('./config/config'),
	mongoose       = require('mongoose')


var configuration = config.configuration;

// db connection
var db = mongoose.connect(configuration.db.uri, configuration.db.options, function(err) {
	if (err) {
		console.error('Could not connect to MongoDB!');
	}
});
mongoose.connection.on('error', function(err) {
	console.error('MongoDB connection error: ' + err);
	process.exit(-1);
});


var app = require('./config/express')(db);


app.listen(app.get('PORT') , function() {
	console.log('app is running on port: ' + app.get('PORT'));
});

exports = module.exports = app;