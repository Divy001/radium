const bookModels= require("../models/bookModels.js") 
const authorModels = require("../models/authorModels.js"); 
const author = require("../models/authorBookModels.js"); 

const bookCreation = async function (req , res){
  
    let data = req.body;
    let savedData = await bookModels.create(data)
    res.send({msg: savedData})
}

const getBookData = async function (req,res){
    let allBooks = await bookModels.find()
    res.send({msg: allBooks})
}
        
const getBooksInYear = async function(req,res){
    let a= req.query.b;
    let allBooks = await bookModels.find({year:a});
    res.send({msg:allBooks});
}

const getXINRBooks = async function(req,res){
    let allBooks=await bookModels.find({ "prices.indianPrice" : {$in: ["100INR", "200INR", "500INR"] } } );
    res.send({msg:allBooks});
}

const getParticularBooks = async function(req,res){
    let allBooks=await bookModels.find(req.body);
    res.send({msg:allBooks});
}

const getRandomBooks = async function(req,res){
    let allBooks=await bookModels.find({ $or: [ {stockAvailable: false} , { totalPages: {$gt: 500} }   ] } );
    res .send({msg:allBooks});
}

// a=findAndUpdate({"books.name":"Two States"},{$set:{price:100}})
// let b= a.authors_id 
// let c=await authormodels.find({author_id:b})

//res.send({author_name:c.authorName,updatedPrice:100})

// 4 questions tuesday assignment

// const authorModels = require("../models/authorModels.js"); 
// const author = require("../models/authorBookModels.js"); 


const entryCreation = async function (req , res){ // For author entry
    console.log(req.body);
    let data = req.body;
    if(data.author_id==null){ 
        res.send({msg: "author_id must be there"})
    }else{
        let savedData = await authorModels.create(data)
        res.send({msg: savedData})
    }
}
 //For book entry
const authorBookCreation = async function (req , res){
    console.log(req.body);
    let data = req.body;
    let savedData = await author.create(data)
    res.send({msg: savedData})
}
//   List out of the books of particular author name
const authorFind = async function(req , res){
    let allbooks = await author.find({author_name:"Chetan Bhagat"}).select({author_id:1});
    let id =allbooks[0].author_id;
    let books=await author.find({author_id:id}).select({name:1,_id:0});
    res.send({msg:books});
}
//Api about changing the price and return author name
const changePrice = async function(req,res){
    let allBooks=await author.findOneAndUpdate({"autorbooks.name":"Two States"},{$set:{price:100}});
    let authorId=allBooks.author_id;
    let name=await authorModels.find({author_id:authorId}).select({author_name:1,_id:0});
    let price=allBooks.price;
    res.send({authorname:name,cost:price});

}

//Find the book by its cost
const findBook = async function(req,res){
    let allBooks=await author.find({ "prices" : {$gte:50,$lte:100 } } ).select({author_id:1});
    let len=allBooks.length;
    console.log(len);
    let arr=[];
    for(let i=0;i<len;i++) /// Array traversal is perform
    {
        let id=allBooks[i].author_id;
        let books=await authorModels.find({author_id:id}).select({ author_name:1,_id:0});
        arr.push(books);
    }
    res.send({Authors_Name:arr});
}

module.exports.findBook=findBook;
module.exports.changePrice=changePrice;
module.exports.authorFind=authorFind;
module.exports.authorBookCreation=authorBookCreation;
module.exports.authorCreation=entryCreation;

module.exports.bookCreation= bookCreation ;
module.exports.getBookData= getBookData;
module.exports.getBooksInYear= getBooksInYear;
module.exports.getXINRBooks= getXINRBooks;
module.exports.getParticularBooks= getParticularBooks;
module.exports.getRandomBooks= getRandomBooks;