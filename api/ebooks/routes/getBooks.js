'use strict';

const Book = require('../model/Book');
const Boom = require('boom');

module.exports = {
  method: 'GET',
  path: '/api/books',
  config: {
    handler: (req, res) => {
      Book.find()
        .exec((err, Books) => {
          if (err) {
            res(Boom.badRequest(err));
            throw Boom.badRequest(err);
          }
          if (!Books.length) {
            res(Boom.notFound('No Books found!'));
            throw Boom.notFound('No Books found!');
          }
          res({
            success: true,
            books: Books
        }).code(200);
          
        });
    },
    auth: false
  }
};