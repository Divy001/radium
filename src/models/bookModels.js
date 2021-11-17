const mongoose= require('mongoose')

const bookSchema1=new mongoose.Schema({
    isbn: String,
    bookName:String,
    authorName:String,
    prices:{
        indianPrice:String,
        europeanPrice:String
    },
    year:{
        required: true,
        type:Number,
        default:2021,
    },
    tags:Array,
    totalPages:Number,
    stockAvailable:Boolean,
    category:String,
    
}, {timestamps: true} )

module.exports=mongoose.model('Books1',bookSchema1);