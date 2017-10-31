'use strict';

const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const Choice = new Schema({
  text: String,
  score: Number,
});

const Body = new Schema({
  question: String,
  choice: [Choice]
});

const Answer = new Schema( {
  message: String,
  operator: String,
  score: Number
});

const quizModel = new Schema({
  title: { type: String, required: true},
  imageUrl: { type: String },
  author: { type: String },
  body: [Body],
  answer: [Answer]
});

module.exports = mongoose.model('Quiz', quizModel);

// {
// 	"quizzes": [{
// 		"_id": "59d5ef17ae3fc53740182753",
// 		"author": "DEMs Care",
// 		"imageUrl": "https://images.unsplash.com/reserve/E5CwLOxQSFimIXJurfpq_IMG_6424%20(1).jpg?dpr=1&auto=compress,format&fit=crop&w=1950&h=&q=80&cs=tinysrgb&crop=",
// 		"title": "แบบทดสอบที่ 1",
// 		"body": [{
// 				"question": "คำถามที่ 1",
// 				"choice": [{
// 						"text": "ช้อยที่ 1",
// 						"score": 1
// 					},
// 					{
// 						"text": "ช้อยที่ 2",
// 						"score": 2
// 					}
// 				]
// 			},
// 			{
// 				"question": "คำถามที่ 2",
// 				"choice": [{
// 						"text": "ช้อยที่ 1",
// 						"score": 1
// 					},
// 					{
// 						"text": "ช้อยที่ 2",
// 						"score": 2
// 					}
// 				]
// 			}
//         ],
//         "Answer": [
//             {
//                 "message": "Answer1",
//                 "operator": ">",
//                 "score": 5
//             },
//             {
//                 "message": "Answer2",
//                 "operator": "<",
//                 "score": 3
//             }
//         ]
// 	}]
// }

// type script interface
// declare module namespace {
  
//       export interface Choice {
//           text: string;
//           score: number;
//       }
  
//       export interface Body {
//           question: string;
//           choice: Choice[];
//       }
  
//       export interface Answer {
//           message: string;
//           operator: string;
//           score: number;
//       }
  
//       export interface Quiz {
//           _id: string;
//           author: string;
//           imageUrl: string;
//           title: string;
//           body: Body[];
//           answer: Answer[];
//       }
  
//       export interface RootObject {
//           quizzes: Quiz[];
//       }
  
//   }
  
  
