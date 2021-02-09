// accessing mongoose package
const mongoose = require('mongoose');

// // Database connection

// Schema definition
const Schema = mongoose.Schema;

var CquizSchema = new Schema({
    
    question:String,
    option1:String,
    option2:String,
    option3:String,
    option4:String,
    option5:String
    
});

var cquizData=mongoose.model('cquizdatas',CquizSchema);



module.exports=cquizData;
