


module.exports = function(app) {

	// index controller
	var main = require('../controllers/post.server.controller');

	// Setting up the index router
	// app.use(main.index);
	app.route('/').get(main.index);
};