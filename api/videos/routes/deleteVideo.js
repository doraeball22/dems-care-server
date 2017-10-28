'use strict';

const Video = require('../model/Video');
const Boom = require('boom');

module.exports = {
    method: 'DELETE',
    path: '/api/videos/{id}',
    config: {
      handler: (req, res) => {
        const id = req.params.id;
        const query = Video.findOneAndRemove({
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
                message: 'This Video has Deleted!'
            }).code(200);
        })
      },
      auth: false
    }
  };