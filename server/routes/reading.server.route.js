


module.exports = function(app) {

	var reading = require('../controllers/reading.server.controller.js')

	app.route('/api/:category/:id').get(reading.get);
}