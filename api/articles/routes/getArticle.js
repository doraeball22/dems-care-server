'use strict';

const Article = require('../model/Article');
const Boom = require('boom');

module.exports = {
  method: 'GET',
  path: '/api/articles',
  config: {
    handler: (req, res) => {
      Article.find()
        .exec((err, Articles) => {
          if (err) {
            throw Boom.badRequest(err);
          }
          if (!Articles.length) {
            throw Boom.notFound('No Articles found!');
          }
          res({
            success: true,
            articles: Articles
        }).code(200);
          
        });
    },
    auth: false
  }
};