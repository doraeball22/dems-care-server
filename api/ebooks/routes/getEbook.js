'use strict';

const Ebook = require('../model/Ebook');
const Boom = require('boom');

module.exports = {
  method: 'GET',
  path: '/api/ebooks',
  config: {
    handler: (req, res) => {
      Ebook.find()
        .exec((err, Ebooks) => {
          if (err) {
            throw Boom.badRequest(err);
          }
          if (!Ebooks.length) {
            throw Boom.notFound('No ebooks found!');
          }
          res({
            success: true,
            ebooks: Ebooks
        }).code(200);
          
        });
    },
    auth: false
  }
};