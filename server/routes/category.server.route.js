


module.exports = function(app) {
	// index controller
	var category = require('../controllers/category.server.controller');
	// Setting up the index router
	app.route('/api/:category').get(category.get);
};