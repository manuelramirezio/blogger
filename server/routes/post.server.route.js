


module.exports = function(app) {

	// index controller
	var main = require('../controllers/post.server.controller');

	// Setting up the index router
	app.route('/api/category').get(main.index);
};