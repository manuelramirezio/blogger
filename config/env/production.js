


module.exports = {
	db: {
			uri: 'mongodb://zesta:zesta@ds031741.mongolab.com:31741/imernews' ,
			options: {
				user: '',
				pass: ''
		}
	},
	server: {
		PORT : process.env.PORT
	},
	email: {
		user: 'zestanews@gmail.com',
		pass: 'laduna1@'
	}
}