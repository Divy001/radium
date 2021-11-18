const bookModels = require('../models/bookModel.js')
const authorModels = require('../models/authorModel')


const authorCreation = async function(req, res){
    console.log(req.body)
    let data = req.body;
    let savedData = await authorModels.create(data);
    res.send({msg: savedData})
}

const bookCreation = async function(req, res){
    let data = req.body
    let id = req.body.author
    let validId = await authorModels.findById(id)
    if(validId){
        let data1 = await bookModels.create(data)
        res.send(data1)
    }else{
        res.send("This Author Id is Invalid")
    }
}

const getAllBooks = async function(req,res){
    let allBooks = await bookModels.find().populate('author')
    res.send(allBooks)
}


module.exports.authorsCreation=authorCreation;
module.exports.booksCreation=bookCreation;
module.exports.getAllBooks=getAllBooks;