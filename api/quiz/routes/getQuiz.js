'use strict';

const Quiz = require('../model/Quiz');
const Boom = require('boom');

// const mockQuizs =  {
//   "_id": "59d5c5a2055fa121e8b7a5cc",
//   "author": "DEMs Care",
//   "imageUrl": "https://images.unsplash.com/reserve/E5CwLOxQSFimIXJurfpq_IMG_6424%20(1).jpg?dpr=1&auto=compress,format&fit=crop&w=1950&h=&q=80&cs=tinysrgb&crop=",
//   "title": "แบบทดสอบที่ 1",
//   "__v": 0,
//   "body": [
//     {
//       "question":"คำถามที่ 1",
//       "choice":[
//          {
//             "text":"ช้อยที่ 1",
//             "score":1
//          },
//          {
//             "text":"ช้อยที่ 2",
//             "score":2
//          }
//       ]
//    },
//    {
//       "question":"คำถามที่ 2",
//       "choice":[
//          {
//           "text":"ช้อยที่ 1",
//           "score":1
//          },
//          {
//             "text":"ช้อยที่ 2",
//             "score":2
//          }
//       ]
//    }

//   ]
// };

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