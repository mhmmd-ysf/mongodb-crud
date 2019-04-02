const { MongoClient } = require('mongodb')
let client = null

class Connection {
  static connect() {
    client = new MongoClient('mongodb://localhost:27017', { useNewUrlParser: true })
    return new Promise((resolve, reject) => {
      client.connect()
      .then(() => {
        let db = client.db('books-CRUD')
        let books = db.collection('books')
        resolve(books)
      })
      .catch(err => {
        reject(err)
      })
    })
  }
  static close() {
    return client.close()
  }
}

module.exports = Connection