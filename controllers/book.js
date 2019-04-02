const Connection = require('./connection')
const Book = require('../models/bookModel')

class BookController {
  static findAll(req, res) {
    Book.findAll(req, res)
  }
  static create(req, res) {
    Book.create(req, res)
  }
  static update(req, res) {
    Book.update(req, res)
  }
  static delete(req, res) {
    Book.delete(req, res)
  }
}


module.exports = BookController