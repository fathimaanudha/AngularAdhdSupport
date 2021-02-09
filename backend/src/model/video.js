const mongoose = require('mongoose');
const Schema = mongoose.Schema;
var vidSchema = new Schema({
    name:String,
    videoUrl:String
})
var video = mongoose.model('videodatas',vidSchema);
module.exports = video;