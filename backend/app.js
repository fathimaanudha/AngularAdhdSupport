

// create express variable
const express = require('express');
var path = require('path');
const jwt = require('jsonwebtoken')
const cors = require('cors');

var port = process.env.PORT || 3000;
// create express application
var app = new express();
var http = require('http').Server(app);
let io = require('socket.io')(http,{
    cors:{
        allowedHeaders:"*",
        origin:"*"
    }
})



const bodyparser = require('body-parser');



const cquizData=require('./src/model/cquizdata');
const User = require('./src/model/userdata');
const adhd = require('./src/model/adhd');
const solutions = require('./src/model/solutions');
const chat = require('./src/model/chat');
const noti = require('./src/model/noti');
const video = require('./src/model/video');
// accessing mongoose package
const mongoose = require('mongoose');

mongoose.set('useFindAndModify', false);
mongoose.connect('mongodb+srv://userone:userone@ictakfiles.slzuy.mongodb.net/PROJECT?retryWrites=true&w=majority',

    {   useNewUrlParser: true ,
        useUnifiedTopology: true,
        useCreateIndex: true
    });




app.use(cors());
app.use(bodyparser.json());
app.use(express.static('./public'));
app.use(express.urlencoded({extended:true}));

app.set('view engine','ejs');



app.get('/cquiz',function(req,res){
    
    cquizData.find()
    .then(function(quiz){
        res.send(quiz);
        // console.log()     
    });
});

app.post('/register',function(req,res){
    
    console.log(req.body);
    var user={
        name:req.body.user.name,
        email:req.body.user.email,
        password:req.body.user.password,
    } 
    var user = new User(user);
    user.save();
    console.log(user);      
    })
     

     


app.post('/login',(req,res)=>{
    let userData =req.body;
    User.findOne({email: userData.email},(err,user)=>{
        if(err)
            {
                console.log(err);
            }
        else{
            if(!user)
                {
                    res.status(401).send('inavlid email')
                }
            else {
               if(user.password != userData.password)
                {
                    res.status(401).send('invalid password')
                }
            else{
               
                   
                    let token = "user"
                    res.status(200).send({token})
                   
                }
               
            }
        }
    })


})
// chat
io.on('connection',(socket)=> {
    console.log(`New connection ${socket.id}`);
// listening to events
    socket.on('chat',function(data){
        io.sockets.emit('chat',data);
    });
    socket.on('typing',function(data){
        io.sockets.emit('typing',data);
    });
})
// save chat
app.get('/chat',function(req,res){
    chat.find()
    .then(function(msg){
        res.send(msg);
    });
});
app.post('/chat/insert',function(req,res){
    res.header("Access-Control-Allow-Origin","*")
    res.header("Access-Control-Allow-Methods: GET,POST,PATCH,PUT,DELETE,OPTIONS");
var sol ={
    user:req.body.sol.user,
    message:req.body.sol.message,

}
var sol = new chat(sol);
console.log(sol.noti);
sol.save();
})
// save notification
app.get('/noti',function(req,res){
    noti.find().sort({_id: -1})
    .then(function(msg){
        res.send(msg);
    });
});
app.post('/noti/insert',function(req,res){
    res.header("Access-Control-Allow-Origin","*")
    res.header("Access-Control-Allow-Methods: GET,POST,PATCH,PUT,DELETE,OPTIONS");
var sol ={
    noti:req.body.sol.noti

}
var sol = new noti(sol);
sol.save();
})


// solutions
app.get('/solutions',function(req,res){
    solutions.find()
    .then(function(sol){
        res.send(sol);
    });
});

app.get('/solutions/:id', function(req,res){
    const id= req.params.id;
    solutions.findOne({_id:id})
    .then(function(sol){
        res.send(sol);
    });
});

app.put('/solutions/update/:id',(req,res)=>{
    const id= req.params.id;
    title=req.body.title,
    image=req.body.image,
    description=req.body.description,
    name1=req.body.name1,
    name2=req.body.name2,
    name3=req.body.name3,
    name4=req.body.name4,
    name5=req.body.name5,
    name6=req.body.name6,
    name7=req.body.name7,
    name8=req.body.name8,
    name9=req.body.name9,
    name10=req.body.name10,
    image1 = req.body.image1,
    image2 = req.body.image2,
    image3 = req.body.image3,
    image4 = req.body.image4,
    image5 = req.body.image5,
    image6 = req.body.image6,
    image7 = req.body.image7,
    image8 = req.body.image8,
    image9 = req.body.image9,
    image10 = req.body.image10,
    description1=req.body.description1,
    description2=req.body.description2,
    description3=req.body.description3,
    description4=req.body.description4,
    description5=req.body.description5,
    description6=req.body.description6,
    description7=req.body.description7,
    description8=req.body.description8,
    description9=req.body.description9,
    description10=req.body.description10
solutions.findByIdAndUpdate(id,{
    $set:{
        "title":title,
        "image":image,
        "description":description,
        "name1":name1,
        "name2":name2,
        "name3":name3,
        "name4":name4,
        "name5":name5,
        "name6":name6,
        "name7":name7,
        "name8":name8,
        "name9":name9,
        "name10":name10,
        "image1":image1,
        "image2":image2,
        "image3":image3,
        "image4":image4,
        "image5":image5,
        "image6":image6,
        "image7":image7,
        "image8":image8,
        "image9":image9,
        "image10":image10,
        "description1":description1,
        "description2":description2,
        "description3":description3,
        "description4":description4,
        "description5":description5,
        "description6":description6,
        "description7":description7,
        "description8":description8,
        "description9":description9,
        "description10":description10


        
    }
})
    .then(function(){
        res.send();
    })
})





app.delete('/solutions/delete/:id',(req,res)=>{
    id=req.params.id;
    solutions.findByIdAndDelete({'_id':id})
    .then(()=>{
        console.log('solution deleted');
        res.send
    })
})
app.post('/solutions/insert',function(req,res){
    res.header("Access-Control-Allow-Origin","*")
    res.header("Access-Control-Allow-Methods: GET,POST,PATCH,PUT,DELETE,OPTIONS");
    var sol={
        title:req.body.sol.title,
        image:req.body.sol.image,
        description:req.body.sol.description,
        name1:req.body.sol.name1,
        name2:req.body.sol.name2,
        name3:req.body.sol.name3,
        name4:req.body.sol.name4,
        name5:req.body.sol.name5,
        name6:req.body.sol.name6,
        name7:req.body.sol.name7,
        name8:req.body.sol.name8,
        name9:req.body.sol.name9,
        name10:req.body.sol.name10,
        image1 : req.body.sol.image1,
        image2 : req.body.sol.image2,
        image3 : req.body.sol.image3,
        image4 : req.body.sol.image4,
        image5 : req.body.sol.image5,
        image6 : req.body.sol.image6,
        image7 : req.body.sol.image7,
        image8 : req.body.sol.image8,
        image9 : req.body.sol.image9,
        image10 : req.body.sol.image10,
        description1:req.body.sol.description1,
        description2:req.body.sol.description2,
        description3:req.body.sol.description3,
        description4:req.body.sol.description4,
        description5:req.body.sol.description5,
        description6:req.body.sol.description6,
        description7:req.body.sol.description7,
        description8:req.body.sol.description8,
        description9:req.body.sol.description9,
        description10:req.body.sol.description10
        
    }
    var sol = new solutions(sol);
    sol.save();
})

app.get('/articles',function(req,res){
    
    adhd.find()
    .then(function(adh){
        res.send(adh);
          
    });
});
app.get('/articles/:id', function(req,res){
    const id = req.params.id;
    adhd.findOne({_id:id})
    .then(function(adh){
        res.send(adh)
    })
})
app.put('/articles/update/:id',(req,res)=>{
    var id= req.params.id;
    title=req.body.title,        
    image=req.body.image,
    main=req.body.main,
    image1=req.body.image1,
    image2=req.body.image2,
    subtitle1=req.body.subtitle1,
    subtitle2=req.body.subtitle2,
    subtitle3=req.body.subtitle3,
    subtitle4=req.body.subtitle4,
    subtitle5=req.body.subtitle5,
    subtitle6=req.body.subtitle6,
    subtitle7=req.body.subtitle7,
    subtitle8=req.body.subtitle8,
    subtitle9=req.body.subtitle9,
    subtitle10=req.body.subtitle10,
    subpara1=req.body.subpara1,
    subpara2=req.body.subpara2,
    subpara3=req.body.subpara3,
    subpara4=req.body.subpara4,
    subpara5=req.body.subpara5,
    subpara6=req.body.subpara6,
    subpara7=req.body.subpara7,
    subpara8=req.body.subpara8,
    subpara9=req.body.subpara9,
    subpara10=req.body.subpara10
adhd.findByIdAndUpdate(id,{
    $set:{
        "title":title,
        "image":image,
        "main":main,
        "image1":image1,
        "image2":image2,
        "subtitle1":subtitle1,
        "subpara1":subpara1,
        "subtitle2":subtitle2,
        "subpara2":subpara2,
        "subtitle3":subtitle3,
        "subpara3":subpara3,
        "subtitle4":subtitle4,
        "subpara4":subpara4,
        "subtitle5":subtitle5,
        "subpara5":subpara5,
        "subtitle6":subtitle6,
        "subpara6":subpara6,
        "subtitle7":subtitle7,
        "subpara7":subpara7,
        "subtitle8":subtitle8,
        "subpara8":subpara8,
        "subtitle9":subtitle9,
        "subpara9":subpara9,
        "subtitle10":subtitle10,
        "subpara10":subpara10
        
    }
    })
    .then(function(){
        res.send();
    })
        
})
app.delete('/articles/delete/:id',(req,res)=>{
    id=req.params.id;
    adhd.findByIdAndDelete({"_id":id})
    .then(()=>{
        console.log('article deleted');
        res.send();
    })
})
app.post('/articles/insert',function(req,res){
    res.header("Access-Control-Allow-Origin","*")
    res.header("Access-Control-Allow-Methods: GET,POST,PATCH,PUT,DELETE,OPTIONS");
    // console.log(req.body);
    var adh={
        title:req.body.adh.title,        
        image:req.body.adh.image,
        main:req.body.adh.main,
        image1:req.body.adh.image1,
        image2:req.body.adh.image2,
        subtitle1:req.body.adh.subtitle1,
        subtitle2:req.body.adh.subtitle2,
        subtitle3:req.body.adh.subtitle3,
        subtitle4:req.body.adh.subtitle4,
        subtitle5:req.body.adh.subtitle5,
        subtitle6:req.body.adh.subtitle6,
        subtitle7:req.body.adh.subtitle7,
        subtitle8:req.body.adh.subtitle8,
        subtitle9:req.body.adh.subtitle9,
        subtitle10:req.body.adh.subtitle10,
        subpara1:req.body.adh.subpara1,
        subpara2:req.body.adh.subpara2,
        subpara3:req.body.adh.subpara3,
        subpara4:req.body.adh.subpara4,
        subpara5:req.body.adh.subpara5,
        subpara6:req.body.adh.subpara6,
        subpara7:req.body.adh.subpara7,
        subpara8:req.body.adh.subpara8,
        subpara9:req.body.adh.subpara9,
        subpara10:req.body.adh.subpara10

    }
    var adh = new adhd(adh);
    adh.save();
    // console.log("tips"+adh);
})

// video
app.get('/video',function(req,res){
    
    video.find()
    .then(function(vid){
        res.send(vid);
        // console.log()     
    });
});
app.get('/video/:id', function(req,res){
    const id= req.params.id;
    video.findOne({_id:id})
    .then(function(vid){
        res.send(vid);
    });
});
app.post('/video/insert',function(req,res){
    res.header("Access-Control-Allow-Origin","*")
    res.header("Access-Control-Allow-Methods: GET,POST,PATCH,PUT,DELETE,OPTIONS");
    const Url=req.body.vid.videoUrl
    var vid_id = Url.split("v=")[1].substring(0, 11)    

var vid ={
    name:req.body.vid.name,
    videoUrl:vid_id
}

    


var vid = new video(vid);
vid.save();
})
app.delete('/video/delete/:id',(req,res)=>{
    id=req.params.id;
    video.findByIdAndDelete({'_id':id})
    .then(()=>{
        console.log('video deleted');
        res.send
    })
})

http.listen(port,function(){
    console.log(`listening for requests on ${port} `)
});
