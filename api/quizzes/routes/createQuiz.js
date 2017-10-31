'use strict';

const Boom = require('boom');
const Quiz = require('../model/Quiz');

module.exports = {
  method: 'POST',
  path: '/api/quizzes',
  config: {
    handler: (req, res) => {

      let quiz = new Quiz();  
      quiz.title = req.payload.title;
      quiz.imageUrl = req.payload.imageUrl;
      quiz.author = req.payload.author;
      quiz.body = req.payload.body;       
  
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


/**
 * Example Input
 * 
 *{
   "author":"DEMs Care",
   "imageUrl":"https://images.unsplash.com/reserve/E5CwLOxQSFimIXJurfpq_IMG_6424%20(1).jpg?dpr=1&auto=compress,format&fit=crop&w=1950&h=&q=80&cs=tinysrgb&crop=",
   "title":"แบบทดสอบที่ 1",
   "body":[
      {
         "question":"คำถามที่ 1",
         "choice":[
            {
               "text":"ช้อยที่ 1",
               "score":1
            },
            {
               "text":"ช้อยที่ 2",
               "score":2
            }
         ]
      },
      {
         "question":"คำถามที่ 2",
         "choice":[
            {
               "text":"ช้อยที่ 1",
               "score":1
            },
            {
               "text":"ช้อยที่ 2",
               "score":2
            }
         ]
      }
   ],
   "answer":[
      {
         "message":"answer1",
         "operator":">",
         "score":5
      },
      {
         "message":"answer2",
         "operator":"<",
         "score":3
      }
   ]
}
 */