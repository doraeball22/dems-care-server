'use strict';

const Boom = require('boom');
const Quiz = require('../model/Quiz');
const updateQuizSchema = require('../schemas/updateQuizSchema');

module.exports = {
    method: 'PATCH',
    path: '/api/aquizs/{id}/edit',
    config: {
      handler: (req, res) => {
        
        const id = req.params.id;
        const updatedQuiz = req.payload;
        Quiz.findOneAndUpdate({ _id: id }, updatedQuiz, (err, quiz) => {
          if (err) {
            res(Boom.badRequest(err));
            throw Boom.badRequest(err);
          }
          if (!quiz) {
            res(Boom.notFound('Quiz not found!').code(404));
            throw Boom.notFound('Quiz not found!').code(404);
          }
          res({ message: 'quiz updated!' });
        });
      },
      validate: {
        params: updateQuizSchema.paramsSchema
      },
      auth: false
    }
  };