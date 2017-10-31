'use strict';

const Book = require('../model/Book');
const Boom = require('boom');

module.exports = {
    method: 'DELETE',
    path: '/api/books/{id}',
    config: {
      handler: (req, res) => {
        const id = req.params.id;
        const query = Book.findOneAndRemove({
            _id: id
        });
        query.exec(function (err, book) {
            if (err) {
                res(Boom.badRequest(err));
                throw Boom.badRequest(err);
            }
            if (!book) {
                res(Boom.notFound('Book not found!'));
                throw Boom.notFound('Book not found!');
              }
            res({
                message: 'This Book has Deleted!'
            }).code(200);
        })
      },
      auth: false
    }
  };