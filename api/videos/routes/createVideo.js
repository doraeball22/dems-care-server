'use strict';

const Boom = require('boom');
const Video = require('../model/Video');

module.exports = {
  method: 'POST',
  path: '/api/videos',
  config: {
    handler: (req, res) => {
      let video = new Video();

      video.title = req.payload.title;
      video.bodyUrl = req.payload.bodyUrl
      video.imageUrl = req.payload.imageUrl;
      video.author = req.payload.author;
  
      video.save((err, video) => {
        if (err) {
          res(Boom.badRequest(err));
          throw Boom.badRequest(err);
        }
        // If the user is saved successfully, issue a JWT
        res({
          video: video
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