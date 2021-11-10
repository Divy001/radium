const express = require('express');

const router = express.Router();
const movies = ["Hero","Avengers","India"]

router.get('/test-me', function (req, res) {
    res.send('My first ever api!')
});

router.get('/movies', function (req , res){
   
   res.send(movies)

})

router.get('/movies/:index', function (req , res){
    //console.log(req.params)
    const value = req.params.index;
    if(value>movies.length){
        res.send("Enter Valid Index")
    }else{
        res.send(movies[value])
    }
   // value>movies.length?res.send("Enter Valid Index"):res.send(movies[value])
    
   // res.send(movies)

});

router.get('/films' , function (req , res){
    
    const films = [{"id": 1,"name": "The Shining"},{"id":2, "name":"Incendices"},{"id":3,"name":"Rang De Basanti"},{"id":4,"name": "Finding Demo"}]
    res.send(films)
});

router.get('/films/:filmId', function (req , res){
    
    const films = [{id: 1,name: "The Shining"},{id:2, name:"Incendices"},{id:3,name:"Rang De Basanti"},{id:4,name: "Finding Demo"}]
    const value = +req.params.filmId
    const len = films.length
    const b=0;
    
    for(let i=0;i<len;i++){
        if(films[i].id===value){
            res.send(films[i])
            b=1
            break;
        }
    }
    if(b===0){
        res.send("The movies does not exist with this = "+value)
    }


})

module.exports = router;