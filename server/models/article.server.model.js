


var mongoose = require('mongoose'),
	Schema   = mongoose.Schema

var articleSchema = new Schema({
	title    : { type : String  , trim : true , required : true },
	image	 : { type : String	, default : '/dist/img/head.png'},
	category : [{ type : String , trim : true , required : true }],
	body	 : { type : String  , trim : true , required : true },
	created  : { type : Date    , default : Date.now },
	author   : { type : String  , trim : true } 
});

mongoose.model('Article' , articleSchema);