'use strict';

const Quiz = require('../model/Quiz');
const Boom = require('boom');

module.exports = {
    method: 'GET',
    path: '/api/quizzes/{id}',
    config: {
        handler: (req, res) => {

            const id = req.params.id;
            const query = Quiz.findOne({
                _id: id
            });
            query.exec(function (err, quiz) {
                if (err) {
                    res(Boom.badRequest(err));
                    throw Boom.badRequest(err);
                }
                if (!quiz) {
                    res(Boom.notFound('Quiz not found!'));
                    throw Boom.notFound('Quiz not found!');
                  }
                res({
                    success: true,
                    quiz: quiz
                }).code(200);
            })
        },
        auth: false
    }
};
// When there are no matches find() returns [], while findOne() returns null. So either use:
// Model.find( {...}, function (err, results) {
//     if (err) { ... }
//     if (!results.length) {
//         // do stuff here
//     }
// }

// or:

// Model.findOne( {...}, function (err, result) {
//     if (err) { ... }
//     if (!result) {
//         // do stuff here
//     }
// }
// https://stackoverflow.com/questions/9660587/do-something-if-nothing-found-with-find-mongoose