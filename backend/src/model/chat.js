const mongoose = require('mongoose');
const Schema = mongoose.Schema;
var chatSchema = new Schema({
    user:String,
    message:String,
    noti:String
})

var chat = mongoose.model('chatdatas',chatSchema);

module.exports = chat;
