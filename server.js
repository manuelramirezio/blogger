var express	  =require('express'),
	router	  =require('./api')
	config	  =require('./config'),
	bodyParser=require('body-parser')

app=express();

app.set('PORT',(process.env.PORT||config.PORT))
	.use(express.static('./public'))
	.use(bodyParser.json())
	.use(function(req,res){
		res.sendfile('public/main.html')
	})
	.use(router)

app.listen(app.get('PORT'),function(){
	console.log('app is running on port: '+app.get('PORT'));
});