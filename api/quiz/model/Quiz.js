'use strict';

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// const questionModel = new Schema({
  
//     question: String,      
//     choice: [
//       {
//         text: String,
//         score: Number
//       }
//     ]
  
// });

const quizModel = new Schema({
  title: { type: String, required: true},
  imageUrl: { type: String },
  author: { type: String },
  body: []
});



module.exports = mongoose.model('Quiz', quizModel);
