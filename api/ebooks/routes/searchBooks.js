'use strict';

const Book = require('../model/Book');
const Boom = require('boom');

module.exports = {
  method: 'GET',
  path: '/api/books/search',
  config: {
    handler: (req, res) => {
        const queryParams = req.query;
        console.log(queryParams);

        Book.find({'title' : {$regex : queryParams.title} })
        .exec((err, Books) => {
          if (err) {
            // res(Boom.badRequest(err));
            // throw Boom.badRequest(err);
          }
          if (!Books.length) {
            // res(Boom.notFound('Book not found!'));
            // throw Boom.notFound('No Books found!');
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