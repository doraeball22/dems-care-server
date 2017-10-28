'use strict';

const Video = require('../model/Video');
const Boom = require('boom');

module.exports = {
    method: 'GET',
    path: '/api/videos/{id}',
    config: {
        handler: (req, res) => {

            const id = req.params.id;
            const query = Video.findOne({
                _id: id
            });
            query.exec(function (err, video) {
                if (err) {
                    res(Boom.badRequest(err));
                    throw Boom.badRequest(err);
                }
                if (!video) {
                    res(Boom.notFound('Video not found!'));
                    throw Boom.notFound('Video not found!');
                  }
                res({
                    success: true,
                    video: video
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