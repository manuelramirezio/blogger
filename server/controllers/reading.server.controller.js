


var mongoose = require('mongoose'),
	Post	 = mongoose.model('Post');


exports.get = function(req , res) {
	
	var id  = req.params.id;

	Post.findOne({ _id : id }).exec(function(err,data) {
		if(err) {
			res.status(500);
		}
		res.jsonp(data);
	});
}