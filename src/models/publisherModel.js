const mongoose = require('mongoose')

const publisherSchema = new mongoose.Schema({

    publisher:{
        type:String

    },
    headquarter:String
},{timestamps:true})

module.exports=mongoose.model('myPublisher',publisherSchema);