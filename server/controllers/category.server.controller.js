


var mongoose = require('mongoose'),
	Q		 = require('q'),
	Post     = mongoose.model('Article');


exports.get = function(req , res) {

	var deferred = Q.defer(),
		category = req.params.category,
		page 	 = req.query.page == undefined ? 1 : req.query.page,
		maxPost  = 10,
		skip	 = (page - 1) * maxPost,
		n	 = 0;
		
	// get number of economic posts
	var count = Post.count({ 'category' : category })
		.exec(function(err , data) {
			if(err) {
				deferred.error(err);
			}
			n = data;
			deferred.resolve(n)
		});
	// send posts to client
	count.then(function(count) {
		Post.find({ 'category' : category } , 
			{ title : 1 , image : 1 , created : 1 , category : 1 })
			.sort({ created : -1 })
			.skip(skip)
			.limit(maxPost)
			.exec(function(err , data) {
				if(err) {
					console.log(err)
					res.status(500);
				}
				data.push({ count : n });
				res.jsonp(data);
			})
	})
}