'use strict';

const Boom = require('boom');
const Quiz = require('../model/Quiz');

module.exports = {
  method: 'POST',
  path: '/api/quizs',
  config: {
    handler: (req, res) => {
      let quiz = new Quiz();

      let questionList = JSON.parse(req.payload.body);
      

      quiz.title = req.payload.title;
      quiz.imageUrl = req.payload.imageUrl;
      quiz.author = req.payload.author;
      quiz.body = questionList;      
      
  
      quiz.save((err, quiz) => {
        if (err) {
          res(Boom.badRequest(err));
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