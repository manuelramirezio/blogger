

var mongoose = require('mongoose'),
	Q		 = require('q'),
	Post     = mongoose.model('Post');


exports.index = function(req , res) {
	var objects  = {},
		deferred = Q.defer();

	var readFile = Post.findOne({ 'mainPost' : false }).exec( function(err , data) {
		if(err) {
			deferred.reject(err);
		} else {
			objects.mainPost = data;
			deferred.resolve(objects);
		}
		return deferred.promise;
	});

	readFile
		.then(function(main) {
			return [1,2,3]
		})
		.then(function(actual) {
			console.log(actual,objects)
			return actual
		})

	// Post.find({}).sort({ 'created' : -1 }).limit('2').exec(function(err , data) {
	// 	res.jsonp(data);	
	// });
}