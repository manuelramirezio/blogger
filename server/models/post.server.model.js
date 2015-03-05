


var mongoose = require('mongoose'),
	Schema   = mongoose.Schema

var postSchema = new Schema({
	title    : { type : String  , trim : true , required : true },
	category : { type : String  , trim : true , required : true },
	created  : { type : Date    , default : Date.now },
	body	 : { type : String  , trim : true , required : true },
	author   : { type : String  , trim : true },
	mainPost : { type : Boolean , default : false }
});

mongoose.model('Post' , postSchema);