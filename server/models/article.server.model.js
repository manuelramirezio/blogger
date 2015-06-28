


var mongoose = require('mongoose'),
	Schema   = mongoose.Schema

var postSchema = new Schema({
	title    : { type : String  , trim : true , required : true },
	image	 : { type : String	, required : true },
	category : [{ type : String , trim : true , required : true }],
	body	 : { type : String  , trim : true , required : true },
	created  : { type : Date    , default : Date.now },
	author   : { type : String  , trim : true } 
});

mongoose.model('Post' , postSchema);