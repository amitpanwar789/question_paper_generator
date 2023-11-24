const easy_questions = require("./assets/easy_question");
const medium_questions = require("./assets/medium_question");
const hard_questions = require("./assets/hard_question");
const fs = require("fs");

class QuestionPaperGenerator {
  constructor() {
    this.easy_questions = easy_questions;
    this.medium_questions = medium_questions;
    this.hard_questions = hard_questions;
    this.question_paper = [];
  }

  add_easy_questions(total_marks) {
    if(total_marks === 0) return;
    if(total_marks%2 !== 0){
        const element = easy_questions[0];
        this.question_paper.push({...element,marks:1});
        total_marks -= total_marks%2;
    }
    while (total_marks) {
      const randomIndex = Math.floor(Math.random() * easy_questions.length);
      const element = easy_questions[randomIndex];
      if (!this.question_paper.includes(element)) {
        this.question_paper.push(element);
        total_marks -= 2;
      }
    }
  }
  add_hard_questions(total_marks) {
    if(total_marks === 0) return;
    if(total_marks%10 !== 0){
        const element = hard_questions[0];
        this.question_paper.push({...element,marks:total_marks%10});
        total_marks -= total_marks%10;
    }
    while (total_marks) {
      const randomIndex = Math.floor(Math.random() * hard_questions.length);
      const element = hard_questions[randomIndex];
      if (!this.question_paper.includes(element)) {
        this.question_paper.push(element);
        total_marks -= 10;
      }
    }
  }
  add_medium_questions(total_marks) {
    if(total_marks === 0) return;
    if(total_marks%5 !== 0){
        const element = medium_questions[0];
        this.question_paper.push({...element,marks:total_marks%5});
        total_marks -= total_marks%5;
    }
    while (total_marks) {
      const randomIndex = Math.floor(Math.random() * medium_questions.length);
      const element = medium_questions[randomIndex];
      if (!this.question_paper.includes(element)) {
        this.question_paper.push(element);
        total_marks -= 5;
      }
    }
  }

  generate_paper() {
    const question_paper_ready = this.question_paper.map((element) => {
      return element.question + "          " + element.marks;
    });
    fs.writeFile(
      "Question Paper.txt",
      question_paper_ready.join("\n"),
      (err) => {
        if (err) {
          console.log("\x1b[31mSomething went wrong.\x1b[0m Please try again!");
        }
      }
    );
  }

  generateQuestionPaper(difficulty_distribution) {
    this.add_easy_questions(Number(difficulty_distribution[0]));
    this.add_medium_questions(Number(difficulty_distribution[1]));
    this.add_hard_questions(Number(difficulty_distribution[2]));
    this.generate_paper();
  }
}

module.exports = QuestionPaperGenerator;
