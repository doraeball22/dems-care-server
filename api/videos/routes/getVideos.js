'use strict';

const Video = require('../model/Video');
const Boom = require('boom');

module.exports = {
  method: 'GET',
  path: '/api/videos',
  config: {
    handler: (req, res) => {
      Video.find()
        .exec((err, Videos) => {
          if (err) {
            res(Boom.badRequest(err));
            throw Boom.badRequest(err);
          }
          if (!Videos.length) {
            res(Boom.notFound('No Videos found!'));
            throw Boom.notFound('No Videos found!');
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