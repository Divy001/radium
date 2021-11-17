const express = require('express');
const router = express.Router();
const UserModel= require("../models/userModel")
const bookController = require("../controllers/bookController")

const UserController= require("../controllers/userController")


router.get('/test-me', function (req, res) {
    res.send('My first ever api!')
});

router.post('/newBook', UserController.createUsers);
router.get('/bookList', UserController.getUsersData); 
//WEEK 5 DAY1

// router.post('/newBooks',bookController.bookCreation);
// router.post('/bookLists',bookController.getBookData);
// router.post('/bookYear',bookController.getBooksInYear);
// router.post('/inrBooks',bookController.getXINRBooks);
// router.post('/particularBook',bookController.getParticularBooks);
// router.post('/randomBook',bookController.getRandomBooks);

router.post('/Create',bookController.authorCreation)
router.post('/authorBook',bookController.authorBookCreation)
router.post('/chetanBhagat',bookController.authorFind)
router.post('/NewPrice',bookController.changePrice)
router.post('/findBook',bookController.findBook)


module.exports = router;