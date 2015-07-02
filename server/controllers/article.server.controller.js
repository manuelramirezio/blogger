


var mongoose 	= require('mongoose'),
	Q		 	= require('q'),
	article     = mongoose.model('Article');


exports.get = function(req, res) {
	article.find({}).exec(function(err, data) {
		if(err) {
			console.log(err);
			return res.status(500).send(err);
		}
		return res.json(data);
	});
}

exports.one = function(req, res) {
	article.findOne({ _id : req.params.id }).exec(function(err, data) {
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

exports.delete = function(req, res) {

	article.remove({ _id : req.params.id }).exec(function(err, data) {
		if(err) {
			console.log(err);
			return res.status(500).send(err);
		}
		return res.json(data);
	});
	
}