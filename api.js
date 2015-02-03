var express=require('express'),
	router=express.Router()

router
	.route('/')
		.get(function(req,res){
			res.sendfile('public/main.html')
		})

module.exports=router;