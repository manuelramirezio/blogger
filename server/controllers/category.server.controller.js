


var mongoose = require('mongoose'),
	Post     = mongoose.model('Post');


exports.get = function(req , res) {
	console.log(req.url)
	Post.find({}).sort({ 'created' : -1 }).limit('2').exec(function(err , data) {
		res.jsonp(data);	
	});
}