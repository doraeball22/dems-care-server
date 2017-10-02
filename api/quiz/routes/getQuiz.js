'use strict';

const Quiz = require('../model/Quiz');
const Boom = require('boom');

module.exports = {
  method: 'GET',
  path: '/api/quizs',
  config: {
    handler: (req, res) => {
      Quiz.find()
        .exec((err, Quizs) => {
          if (err) {
            throw Boom.badRequest(err);
          }
          if (!Quizs.length) {
            throw Boom.notFound('No Quizs found!');
          }
          res({
            success: true,
            quizs: Quizs
        }).code(200);
          
        });
    },
    auth: false
  }
};