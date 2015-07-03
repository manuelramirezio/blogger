


module.exports = function(app) {
	// article controller
	var article = require('../controllers/article.server.controller');

	// Setting up the article router
	app.route('/article')
						 .get(article.get)
						 .post(article.post)
	
	app.route('/article/:id')
						 .get(article.one)
						 .put(article.put)
						 .delete(article.delete)
};