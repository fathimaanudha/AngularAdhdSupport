var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var adhdSchema = new Schema({
    title:String,    
    image:String,
    main:String,
    image1:String,
    image2:String,
    subtitle1:String,
    subpara1:String,
    subtitle2:String,
    subpara2:String,
    subtitle3:String,
    subpara3:String,
    subtitle4:String,
    subpara4:String,
    subtitle5:String,
    subpara5:String,
    subtitle6:String,
    subpara6:String,
    subtitle7:String,
    subpara7:String,
    subtitle8:String,
    subpara8:String,
    subtitle9:String,
    subpara9:String,
    subtitle10:String,
    subpara10:String
})
var adhd = mongoose.model('adhddatas',adhdSchema);
module.exports=adhd;