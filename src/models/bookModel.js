const mongoose = require('mongoose')
//const author = require('../models/authorModel')
const ObjectId = mongoose.Schema.Types.ObjectId
const bookSchema = new mongoose.Schema({
    name:String,
    author:{
        type:ObjectId,
        ref: 'myAuthor'
     },
     price:Number,
     rating:Number
},{timestamps:true})

module.exports=mongoose.model('myBooks', bookSchema);