

var development = require('./env/development'),
	production  = require('./env/production'),
	fs 			= require('fs');

var env = process.env.NODE_ENV


environment = env === undefined ? development : production;

exports.configuration = {
	db: environment.db,
	server: environment.server,
	email : environment.email
}


// for requiring routes
exports.requireFiles = function(dirName, prefix) {
	
	var fileArr = fs.readdirSync(dirName);

	for(var i = 0; i < fileArr.length; i++) {
		require(prefix + fileArr[i]);
	}

};
