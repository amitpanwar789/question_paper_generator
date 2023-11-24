const easyQuestions = require("./assets/easy_question");
const mediumQuestions = require("./assets/medium_question");
const hardQuestions = require("./assets/hard_question");
const fs = require("fs");

class QuestionPaperGenerator {
  constructor() {
    this.easyQuestions = easyQuestions;
    this.mediumQuestions = mediumQuestions;
    this.hardQuestions = hardQuestions;
    this.questionPaper = [];
    this.totalMarks = 100;
  }

  getRandomElement(questionPool) {
    const randomIndex = Math.floor(Math.random() * questionPool.length);
    return questionPool[randomIndex];
  }

  addEasyQuestions(percentageDist) {
    let easyMarks = (percentageDist * this.totalMarks) / 100;
    let extraForRoundOff = Math.ceil(easyMarks) - easyMarks;
    easyMarks += extraForRoundOff;

    if (easyMarks === 0) return;

    if (easyMarks % 2 !== 0) {
      const element = easyQuestions[0];
      this.questionPaper.push({ ...element, marks: 1 });
      easyMarks -= easyMarks % 2;
    }

    while (easyMarks) {
      const element = this.getRandomElement(easyQuestions);
      if (!this.questionPaper.includes(element)) {
        this.questionPaper.push(element);
        easyMarks -= 2;
      }
    }

    return extraForRoundOff;
  }

  addMediumQuestions(percentageDist) {
    let mediumMarks = (percentageDist * this.totalMarks) / 100;
    let extraForRoundOff = Math.ceil(mediumMarks) - mediumMarks;
    mediumMarks += extraForRoundOff;

    if (mediumMarks === 0) return;

    if (mediumMarks % 5 !== 0) {
      const element = mediumQuestions[0];
      this.questionPaper.push({ ...element, marks: mediumMarks % 5 });
      mediumMarks -= mediumMarks % 5;
    }

    while (mediumMarks) {
      const element = this.getRandomElement(mediumQuestions);
      if (!this.questionPaper.includes(element)) {
        this.questionPaper.push(element);
        mediumMarks -= 5;
      }
    }

    return extraForRoundOff;
  }

  addHardQuestions(percentageDist, extraForRoundOff) {
    let hardMarks = (percentageDist * this.totalMarks) / 100;
    hardMarks -= extraForRoundOff;

    if (hardMarks === 0) return;

    if (hardMarks % 10 !== 0) {
      const element = hardQuestions[0];
      this.questionPaper.push({ ...element, marks: hardMarks % 10 });
      hardMarks -= hardMarks % 10;
    }

    while (hardMarks) {
      const element = this.getRandomElement(hardQuestions);
      if (!this.questionPaper.includes(element)) {
        this.questionPaper.push(element);
        hardMarks -= 10;
      }
    }
  }

  generatePaper() {
    const questionPaperReady = this.questionPaper.map((element) => {
      return element.question + "          " + element.marks;
    });

    fs.writeFile("Question Paper.txt", questionPaperReady.join("\n"), (err) => {
      if (err) {
        console.log("\x1b[31mSomething went wrong.\x1b[0m Please try again!");
      }
    });
  }

  generateQuestionPaper(difficultyDistribution) {
    // difficultyDistribution[3] is totalMarks of questionPaper
    if (difficultyDistribution[3]) this.totalMarks = difficultyDistribution[3];

    let extraForRoundOff = 0;
    extraForRoundOff = this.addEasyQuestions(difficultyDistribution[0]);
    extraForRoundOff += this.addMediumQuestions(difficultyDistribution[1]);
    this.addHardQuestions(difficultyDistribution[2], extraForRoundOff);

    this.generatePaper();
  }
}

module.exports = QuestionPaperGenerator;
