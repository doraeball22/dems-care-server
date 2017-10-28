'use strict';

const Video = require('../model/Video');
const Boom = require('boom');

module.exports = {
  method: 'GET',
  path: '/api/videos/search',
  config: {
    handler: (req, res) => {
        const queryParams = req.query;
        console.log(queryParams);

        Video.find({'title' : {$regex : queryParams.title} })
        .exec((err, Videos) => {
          if (err) {
            // res(Boom.badRequest(err));
            // throw Boom.badRequest(err);
          }
          if (!Videos.length) {
            // res(Boom.notFound('Video not found!'));
            // throw Boom.notFound('No Videos found!');
          }
          res({
            success: true,
            videos: Videos
        }).code(200);
          
        });
    },
    auth: false
  }
};