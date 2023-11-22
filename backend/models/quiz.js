const {model, Schema} = require("mongoose")

const quizSchema = new Schema({
  subject: String,
  setName: String,
  code: Number
});

const quiz = model("quiz", quizSchema);
module.exports = quiz;
