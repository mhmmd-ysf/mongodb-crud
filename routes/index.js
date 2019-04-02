const route = require('express').Router()
const BookController = require('../controllers/book')

route.get('/', BookController.findAll)
route.get('/books', BookController.findAll)
route.post('/books', BookController.create)
route.put('/books', BookController.update)
route.delete('/books', BookController.delete)

module.exports = route