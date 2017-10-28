'use strict';

const Boom = require('boom');
const Video = require('../model/Video');
const updateVideoSchema = require('../schemas/updateVideoSchema');

module.exports = {
    method: 'PATCH',
    path: '/api/videos/{id}/edit',
    config: {
      handler: (req, res) => {
        
        const id = req.params.id;
        const updatedVideo = req.payload;
        Video.findOneAndUpdate({ _id: id }, updatedVideo, (err, video) => {
          if (err) {
            res(Boom.badRequest(err));
            throw Boom.badRequest(err);
          }
          if (!video) {
            res(Boom.notFound('Video not found!').code(404));
            throw Boom.notFound('Video not found!').code(404);
          }
          res({
            message: 'Video updated!',
            video: video
        }).code(200);
        });
      },
      validate: {
        params: updateVideoSchema.paramsSchema
      },
      auth: false
    }
  };