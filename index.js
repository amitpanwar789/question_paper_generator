const args = process.argv.slice(2);
const QuestionPaperGenerator = require('./questionPaperGenerator');

const difficultyDistribution = args.map((ele) => {
    return Number(ele);
});

const isInteger = (number) => Number.isInteger(number);

if (difficultyDistribution.length < 3) {
    console.log("\x1b[31mError\x1b[0m Please input Percentage of Easy, Medium, Hard Question Section ");
    return;
}

if (difficultyDistribution[0] + difficultyDistribution[1] + difficultyDistribution[2] !== 100) {
    console.log("\x1b[31mError\x1b[0m Sum of input Percentage of Easy, Medium, Hard Question Section must be equal to 100");
    return;
}

if (isInteger(difficultyDistribution[0]) == false || isInteger(difficultyDistribution[1]) == false || isInteger(difficultyDistribution[2]) == false) {
    console.log("\x1b[31mError\x1b[0m All input values must be integers");
    return;
}

const questionPaperGenerator = new QuestionPaperGenerator();
questionPaperGenerator.generateQuestionPaper(difficultyDistribution);
