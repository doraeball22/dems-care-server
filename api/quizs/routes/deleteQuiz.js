'use strict';

const Quiz = require('../model/Quiz');
const Boom = require('boom');

module.exports = {
    method: 'DELETE',
    path: '/api/quizs/{id}',
    config: {
      handler: (req, res) => {

        const id = req.params.id;        
        Quiz.findOneAndRemove()
          .exec({ _id: id }, (err) => {
            if (err) {
              res(Boom.badRequest(err));
              throw Boom.badRequest(err);
            }
            if (!Quiz) {
              res(Boom.notFound('No Quiz found!'));
              throw Boom.notFound('No Quiz found!');
            }
            res({ message: "Deleted" }).code(200); 
          });
      },
      auth: false
    }
  };