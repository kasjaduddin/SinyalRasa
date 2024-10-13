/**
 * @type{Spot}
 * @exposedAs{Select spot tp start quiz:}
 * @tooltip{To answer question,
choose a spot to tap - it could be the image.}
 */
const startQuizButton;

/**
 * @type{Spot[]}
 * @exposedAs{All content on introduction quiz:}
 * @tooltip{It could be the image.}
 */
const introQuiz;

/**
 * @type{Spot[]}
 * @exposedAs{Spot that correct answer:}
 * @tooltip{To answer question,
choose a spot to tap - it could be the image.}
 */
const correctAnswer;

/**
 * @type{Spot[]}
 * @exposedAs{Select the spot that show answer is correct:}
 * @tooltip{To answer question,
choose a spot to tap - it could be the image.}
 */
const greenCorrectAnswer;

/**
 * @type{Spot[]}
 * @exposedAs{Select the spot that incorrect answer 1:}
 * @tooltip{To answer question,
choose a spot to tap - it could be the image.}
 */
const incorrectAnswerQuestionOne;

/**
 * @type{Spot[]}
 * @exposedAs{Select the spot that incorrect answer 2:}
 * @tooltip{To answer question,
choose a spot to tap - it could be the image.}
 */
const incorrectAnswerQuestionTwo;

/**
 * @type{Spot[]}
 * @exposedAs{Select the spot that incorrect answer 3:}
 * @tooltip{To answer question,
choose a spot to tap - it could be the image.}
 */
const incorrectAnswerQuestionThree;

/**
 * @type{Spot[]}
 * @exposedAs{Select the spot that incorrect answer 4:}
 * @tooltip{To answer question,
choose a spot to tap - it could be the image.}
 */
const incorrectAnswerQuestionFour;

/**
 * @type{Spot[]}
 * @exposedAs{Select the spot that incorrect answer 5:}
 * @tooltip{To answer question,
choose a spot to tap - it could be the image.}
 */
const incorrectAnswerQuestionFive;

/**
 * @type{Spot[]}
 * @exposedAs{Select the spot that incorrect answer 1:}
 * @tooltip{To answer question,
choose a spot to tap - it could be the image.}
 */
const redIncorrectAnswerQuestionOne;

/**
 * @type{Spot[]}
 * @exposedAs{Select the spot that incorrect answer 2:}
 * @tooltip{To answer question,
choose a spot to tap - it could be the image.}
 */
const redIncorrectAnswerQuestionTwo;

/**
 * @type{Spot[]}
 * @exposedAs{Select the spot that incorrect answer 3:}
 * @tooltip{To answer question,
choose a spot to tap - it could be the image.}
 */
const redIncorrectAnswerQuestionThree;

/**
 * @type{Spot[]}
 * @exposedAs{Select the spot that incorrect answer 4:}
 * @tooltip{To answer question,
choose a spot to tap - it could be the image.}
 */
const redIncorrectAnswerQuestionFour;

/**
 * @type{Spot[]}
 * @exposedAs{Select the spot that incorrect answer 5:}
 * @tooltip{To answer question,
choose a spot to tap - it could be the image.}
 */
const redIncorrectAnswerQuestionFive;

/**
 * @type{Spot[]}
 * @exposedAs{All content on first question quiz:}
 * @tooltip{It could be the image.}
 */
const firstQuestion;

/**
 * @type{Spot[]}
 * @exposedAs{All content on second question quiz:}
 * @tooltip{It could be the image.}
 */
const secondQuestion;

/**
 * @type{Spot[]}
 * @exposedAs{All content on third question quiz:}
 * @tooltip{It could be the image.}
 */
const thirdQuestion;

/**
 * @type{Spot[]}
 * @exposedAs{All content on fourth question quiz:}
 * @tooltip{It could be the image.}
 */
const fourthQuestion;

/**
 * @type{Spot[]}
 * @exposedAs{All content on fifth question quiz:}
 * @tooltip{It could be the image.}
 */
const fifthQuestion;

/**
 * @type{Spot}
 * @exposedAs{Correct answer SFx:}
 * @tooltip{It could be the audio.}
 */
const correctSound;

/**
 * @type{Spot}
 * @exposedAs{Incorrect answer SFx:}
 * @tooltip{It could be the audio.}
 */
const incorrectSound;

function start() {
    startQuizButton.interaction.onClick(startQuiz);
    correctAnswer.forEach((spot, index) => {
        spot.interaction.onClick(() => {
            correctSound.isVisible = true;
            makesGreen(index);
        });
    });
    incorrectAnswerQuestionOne.forEach((spot, index) => {
        spot.interaction.onClick(() => {
            incorrectSound.isVisible = true;
            makesRedOne(index);
        });
    });
    incorrectAnswerQuestionTwo.forEach((spot, index) => {
        spot.interaction.onClick(() => {
            incorrectSound.isVisible = true;
            makesRedTwo(index);
        });
    });
    incorrectAnswerQuestionThree.forEach((spot, index) => {
        spot.interaction.onClick(() => {
            incorrectSound.isVisible = true;
            makesRedThree(index);
        });
    });
    incorrectAnswerQuestionFour.forEach((spot, index) => {
        spot.interaction.onClick(() => {
            incorrectSound.isVisible = true;
            makesRedFour(index);
        });
    });
    incorrectAnswerQuestionFive.forEach((spot, index) => {
        spot.interaction.onClick(() => {
            incorrectSound.isVisible = true;
            makesRedFive(index);
        });
    });
}

function startQuiz() {
    introQuiz.forEach(element => element.isVisible = false);
    firstQuestion.forEach(element => element.isVisible = true);
}

function makesGreen(index) {
    correctAnswer[index].isVisible = false;
    greenCorrectAnswer[index].isVisible = true;
    setTimeout(() => nextQuestion(index), 1000);
}

function makesRedOne(index) {
    incorrectAnswerQuestionOne[index].isVisible = false;
    redIncorrectAnswerQuestionOne[index].isVisible = true;
}

function makesRedTwo(index) {
    incorrectAnswerQuestionTwo[index].isVisible = false;
    redIncorrectAnswerQuestionTwo[index].isVisible = true;
}

function makesRedThree(index) {
    incorrectAnswerQuestionThree[index].isVisible = false;
    redIncorrectAnswerQuestionThree[index].isVisible = true;
}

function makesRedFour(index) {
    incorrectAnswerQuestionFour[index].isVisible = false;
    redIncorrectAnswerQuestionFour[index].isVisible = true;
}

function makesRedFive(index) {
    incorrectAnswerQuestionFive[index].isVisible = false;
    redIncorrectAnswerQuestionFive[index].isVisible = true;
}

function nextQuestion(index) {
    greenCorrectAnswer[index].isVisible = false;
    switch(index) {
        case 0:
            firstQuestion.forEach(element => element.isVisible = false);
            redIncorrectAnswerQuestionOne.forEach(element => element.isVisible = false);
            secondQuestion.forEach(element => element.isVisible = true);
            break
        case 1:
            secondQuestion.forEach(element => element.isVisible = false);
            redIncorrectAnswerQuestionTwo.forEach(element => element.isVisible = false);
            thirdQuestion.forEach(element => element.isVisible = true);
            break;
        case 2:
            thirdQuestion.forEach(element => element.isVisible = false);
            redIncorrectAnswerQuestionThree.forEach(element => element.isVisible = false);
            fourthQuestion.forEach(element => element.isVisible = true);
            break;
        case 3:
            fourthQuestion.forEach(element => element.isVisible = false);
            redIncorrectAnswerQuestionFour.forEach(element => element.isVisible = false);
            fifthQuestion.forEach(element => element.isVisible = true);
            break;
        case 4:
            fifthQuestion.forEach(element => element.isVisible = false);
            redIncorrectAnswerQuestionFive.forEach(element => element.isVisible = false);
            break;
        default:
            log("Out of range")
    }
}

start();