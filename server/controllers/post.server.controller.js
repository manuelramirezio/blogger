

var mongoose = require('mongoose'),
	Post     = mongoose.model('Post')


exports.index = function(req , res , next) {
	Post.find({}).sort({ 'created' : -1 }).limit('2').exec(function(err , data) {
		res.sendfile('public/main.html');	
	});
}