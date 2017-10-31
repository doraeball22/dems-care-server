'use strict';

const Boom = require('boom');
const Book = require('../model/Book');
const updateBookSchema = require('../schemas/updateBookSchema');

module.exports = {
    method: 'PATCH',
    path: '/api/books/{id}/edit',
    config: {
      handler: (req, res) => {
        
        const id = req.params.id;
        const updatedBook = req.payload;
        Book.findOneAndUpdate({ _id: id }, updatedBook, (err, book) => {
          if (err) {
            res(Boom.badRequest(err));
            throw Boom.badRequest(err);
          }
          if (!book) {
            res(Boom.notFound('Book not found!').code(404));
            throw Boom.notFound('Book not found!').code(404);
          }
          res({
            message: 'Book updated!',
            book: book
        }).code(200);
        });
      },
      validate: {
        params: updateBookSchema.paramsSchema
      },
      auth: false
    }
  };