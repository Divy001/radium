const express = require('express');
var bodyParser = require('body-parser');
var mongoose = require('mongoose')

const route = require('../ref_Populate/src/routes/route');

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/', route);



mongoose.connect("mongodb+srv://users-open-to-all:hiPassword123@cluster0.uh35t.mongodb.net/Divy_ShaktiDB?retryWrites=true&w=majority"
    , { useNewUrlParser: true })
    .then(() => console.log("MongoDb Running on 27017"))
    .catch(err => console.log(err));

app.listen(process.env.PORT || 3000, function () {
    console.log('Express app running on port ' + (process.env.PORT || 3000))
});

const logDb = function (req,res,next){
    const date = new Date()
    const validDate = date.getDate()+"/"
    + (date.getMonth()+1)  + "/" 
    + date.getFullYear() + " "  
    + date.getHours() + ":"  
    + date.getMinutes() + ":" 
    + date.getSeconds();

    const ip = req.ip
    const url = req.originalUrl
    console.log(validDate +" "+ip+ " " + url)
    next()
}

app.use( logDb )

