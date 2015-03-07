


var mongoose = require('mongoose'),
	Schema   = mongoose.Schema

var postSchema = new Schema({
	title    : { type : String  , trim : true , required : true },
	image	 : { type : String	, required : true },
	category : [{ type : String , trim : true , required : true }],
	created  : { type : Date    , default : Date.now },
	body	 : { type : String  , trim : true , required : true },
	author   : { type : String  , trim : true },
	mainPost : { type : Boolean , default : false }
});

mongoose.model('Post' , postSchema);

// {
// 	title : 'es aris Cemi posti marto xalxis Sesaxeb',
// 	image : '/img/slider/3.png',
// 	category : ['society'],
// 	body     : 'tanSi rame unda Cavwero xalxis Sesaxeb mara ver vifiqreb to da ra vqna',
// 	author	 : 'iuri Dolgaruki',
// 	mainPost : false,
// 	created  : new Date()
// }