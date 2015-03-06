


module.exports = function(app) {
	// index controller
	var category = require('../controllers/category.server.controller');
	console.log('roteshi shemovida')
	// Setting up the index router
	app.route('/api/:category').get(category.get);
};