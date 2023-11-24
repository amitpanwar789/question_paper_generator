const args = process.argv.slice(2);
const QuestionPaperGenerator = require('./questionPaperGenerator');


var difficulty_distribution = args.map((ele)=>{
    return Number(ele);
})

const isInteger = (number) => Number.isInteger(number);

if(difficulty_distribution.length < 3){
    console.log("\x1b[31mError\x1b[0m Please input Percentage of Easy, Medium, Hard Question Section ");
    return;
}
if(difficulty_distribution[0] + difficulty_distribution[1] + difficulty_distribution[2] !== 100){
    console.log("\x1b[31mError\x1b[0m Sum of input Percentage of Easy, Medium, Hard Question Section must be equal to 100");
    return;
}
if(isInteger(difficulty_distribution[0]) == false || isInteger(difficulty_distribution[1]) == false || isInteger(difficulty_distribution[2]) == false){
    console.log("\x1b[31mError\x1b[0m All input value must be integers");
    return;
}



const question_paper_generator = new QuestionPaperGenerator();
question_paper_generator.generateQuestionPaper(difficulty_distribution);

