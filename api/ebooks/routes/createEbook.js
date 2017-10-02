'use strict';

const Boom = require('boom');
const Ebook = require('../model/Ebook');

module.exports = {
  method: 'POST',
  path: '/api/ebooks',
  config: {
    handler: (req, res) => {
      let ebook = new Ebook();

      ebook.title = req.payload.title;
      ebook.bodyUrl = req.payload.bodyUrl
      ebook.imageUrl = req.payload.imageUrl;
      ebook.author = req.payload.author;
  
      ebook.save((err, ebook) => {
        if (err) {
          throw Boom.badRequest(err);
        }
        // If the user is saved successfully, issue a JWT
        res({
          ebook: ebook
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