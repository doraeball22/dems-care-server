'use strict';

const Boom = require('boom');
const Book = require('../model/Book');

module.exports = {
  method: 'POST',
  path: '/api/books',
  config: {
    handler: (req, res) => {
      let book = new Book();

      book.title = req.payload.title;
      book.bodyUrl = req.payload.bodyUrl
      book.imageUrl = req.payload.imageUrl;
      book.author = req.payload.author;
  
      book.save((err, book) => {
        if (err) {
          throw Boom.badRequest(err);
        }
        // If the user is saved successfully, issue a JWT
        res({
          book: book
        }).code(201);
      });  
    },
    // Validate the payload against the Joi schema
    // validate: {
    //   payload: createUserSchema
    // } 
    auth: false
  }
}