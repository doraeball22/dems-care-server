'use strict';

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const videoModel = new Schema({
  title: { type: String, required: true},
  bodyUrl: { type: String, required: true },
  imageUrl: { type: String },
  author: { type: String, required: true }
});

module.exports = mongoose.model('Video', videoModel);
