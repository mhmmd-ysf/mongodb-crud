const Connection = require('../controllers/connection')
const ObjectID = require('mongodb').ObjectID

class Book {
  constructor(isbn, title, author, category, stock) {
    this.isbn = Number(isbn),
      this.title = title,
      this.author = author,
      this.category = category,
      this.stock = Number(stock)
  }

  static findAll(req, res) {
    Connection.connect()
      .then(books => {
        // let books = db.collection('books')
        return books.find({}).toArray()
      })
      .then(sukses => {
        res.status(200).json(sukses)
        Connection.close()
      })
      .catch(err => {
        res.status(500).json(err)
        Connection.close()
      })
  }
  static create(req, res) {
    Connection.connect()
      .then(books => {
        let input = req.body
        let newBook = new Book(input.isbn, input.title, input.author, input.category, input.stock)
        return books.insertOne(newBook)
      })
      .then(book => {
        res.status(201).json(book)
        Connection.close()
      })
      .catch(err => {
        res.status(500).json(err)
        Connection.close()
      })
  }
  static update(req, res) {
    Connection.connect()
      .then(books => {
        let input = req.body
        let updatedBook = new Book(input.isbn, input.title, input.author, input.category, input.stock)
        return books.updateOne({_id: ObjectID(input.id)}, {$set: updatedBook})
      })
      .then(updated => {
        res.status(200).json(updated)
        Connection.close()
      })
      .catch(err => {
        res.status(500).json(err)
        Connection.close()
      })
  }
  static delete(req, res) {
    Connection.connect()
      .then(books => {
        let input = req.body
        return books.deleteOne({_id:ObjectID(input.id)})
      })
      .then(deleted => {
        res.status(200).json(deleted)
        Connection.close()
      })
      .catch(err => {
        res.status(500).json(err)
        Connection.close()
      })
  }
}

module.exports = Book