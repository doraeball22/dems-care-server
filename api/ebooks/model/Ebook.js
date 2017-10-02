'use strict';

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ebookModel = new Schema({
  title: { type: String, required: true},
  bodyUrl: { type: String, required: true },
  imageUrl: { type: String },
  author: { type: String, required: true },
  isFree : { type: Boolean, default: true}
});

module.exports = mongoose.model('Ebook', ebookModel);
