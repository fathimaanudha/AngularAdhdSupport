const mongoose = require('mongoose');
const Schema = mongoose.Schema;
var notiSchema = new Schema({
    noti:String
})
var noti = mongoose.model('notidatas',notiSchema);
module.exports=noti;