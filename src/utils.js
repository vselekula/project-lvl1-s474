import readlineSync from 'readline-sync';

export const header = (str = 'Welcome to the Brain Games!') => console.log(str);
export const condition = str => console.log(str);
export const askName = (str = 'May I have your name? ') => readlineSync.question(str);
export const greet = (name, str = 'Hello') => console.log(`${str} ${name} !`);
export const randomNumber = (min, max) => Math.floor((Math.random() * (max - min) + min));
export const isEven = num => num % 2 === 0;
export const ask = (question, strQuestion = 'Question: ', strAnswer = 'Your answer:') => readlineSync.question(`${strQuestion} ${question} \n${strAnswer} `);
export const isAnswerCorrect = (usersAnswer, rightAnswer) => usersAnswer === rightAnswer;
export const answerIsCorrect = (str = 'Correct!') => console.log(str);
export const win = (userName, str = 'Congratulations,') => console.log(`${str} ${userName}`);
export const answerIsIncorrect = (userAnswer, rightAnswer, userName) => {
  console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${rightAnswer}'`);
  console.log(`Let's try again, ${userName}`);
};
