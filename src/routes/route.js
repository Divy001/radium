const express = require('express');
const router = express.Router();
const bookController = require('../controllers/bookController')


router.post('/CreateAuthor',bookController.authorsCreation)
router.post('/bookCreate',bookController.booksCreation)
router.get('/getAllBooks',bookController.getAllBooks)



module.exports = router;