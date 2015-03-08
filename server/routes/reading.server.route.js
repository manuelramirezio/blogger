


module.exports = function(app) {

	var reading = require('../controllers/reading.server.controller.js')

	app.route('/api/reading/:id').get(reading.get);
}