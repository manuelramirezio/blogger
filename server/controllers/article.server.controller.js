


var mongoose 	= require('mongoose'),
	Q		 	= require('q'),
	article     = mongoose.model('Article');


// exports.index = function(req , res) {
// 	console.log('iseve aq shemovida')
// 	var objects  = {},
// 		deferred = Q.defer();

// 	var readFile = Post.findOne({ 'mainPost' : false }).exec( function(err , data) {
// 		if(err) {
// 			deferred.reject(err);
// 		} else {
// 			objects.mainPost = data;
// 			deferred.resolve(objects);
// 		}
// 		return deferred.promise;
// 	});

// 	readFile
// 		.then(function(main) {
// 			return [1,2,3]
// 		})
// 		.then(function(actual) {
// 			console.log('aq to?')
// 			// console.log(actual,objects)
// 			return actual
// 		})

// 	// Post.find({}).sort({ 'created' : -1 }).limit('2').exec(function(err , data) {
// 	// 	res.jsonp(data);	
// 	// });
// }

exports.get = function(req, res) {
	article.find({}).exec(function(err, data) {
		if(err) {
			console.log(err);
			return res.status(500).send(err);
		}
		return res.json(data);
	});
}

exports.post = function(req, res) {
	new article(req.body).save(function(err, data) {
		if(err) {
			console.log(err);
			return res.status(500).send(err);
		}
		return res.json(data);
	});
}