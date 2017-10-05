'use strict';

const Boom = require('boom');
const Quiz = require('../model/Quiz');

module.exports = {
  method: 'POST',
  path: '/api/quizs',
  config: {
    handler: (req, res) => {
      let quiz = new Quiz();

      quiz.title = req.payload.title;
      quiz.body = req.payload.body;
      quiz.imageUrl = req.payload.imageUrl;
      quiz.author = req.payload.author;
  
      quiz.save((err, quiz) => {
        if (err) {
          throw Boom.badRequest(err);
        }
        // If the user is saved successfully, issue a JWT
        res({
          quiz: quiz
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