const mongoose = require('mongoose');
const Schema = mongoose.Schema;
var solutionSchema = new Schema({
   
    title:String,
    image:String,
    description:String,
    name1:String,
    name2:String,
    name3:String,
    name4:String,
    name5:String,
    name6:String,
    name7:String,
    name8:String,
    name9:String,
    name10:String,
    image1: String,
    description1:String,
    image2: String,
    description2:String,
    image3: String,
    description3:String,
    image4: String,
    description4:String,
    image5: String,
    description5:String,
    image6: String,
    description6:String,
    image7: String,
    description7:String,
    image8: String,
    description8:String,
    image9: String,
    description9:String,
    image10: String,
    description10:String
     
    

})
var solutions = mongoose.model('solutiondatas',solutionSchema);

module.exports=solutions;
