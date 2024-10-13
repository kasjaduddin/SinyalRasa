/**
 * @type{Spot[]}
 * @exposedAs{Select the spot that correct answer for alphabet quiz:}
 * @tooltip{To answer question,
choose a spot to tap - it could be the image.}
 */
const alphabetCorrectAnswer;

/**
 * @type{Spot[]}
 * @exposedAs{Select the spot that incorrect answer for alphabet quiz:}
 * @tooltip{To answer question,
choose a spot to tap - it could be the image.}
 */
const alphabetIncorrectAnswer;

/**
 * @type{Spot[]}
 * @exposedAs{Select the spot that correct answer for greeting quiz:}
 * @tooltip{To answer question,
choose a spot to tap - it could be the image.}
 */
const greetingCorrectAnswer;

/**
 * @type{Spot[]}
 * @exposedAs{Select the spot that incorrect answer for greeting quiz:}
 * @tooltip{To answer question,
choose a spot to tap - it could be the image.}
 */
const greetingIncorrectAnswer;

/**
 * @type{Spot[]}
 * @exposedAs{All content on main menu page:}
 * @tooltip{It could be the image.}
 */
const mainMenuPage;

/**
 * @type{Spot[]}
 * @exposedAs{All content on achievement page:}
 * @tooltip{It could be the image.}
 */
const achievementPage;

/**
 * @type{Spot}
 * @exposedAs{Select the spot to open achievement page:}
 * @tooltip{It could be the image.}
 */
const achievementButton;

/**
 * @type{Spot[]}
 * @exposedAs{Select the spot to show quiz result:}
 * @tooltip{It could be the image.}
 */
const result;

/**
 * @type{Spot[]}
 * @exposedAs{Select the spot to back to main menu page:}
 * @tooltip{To answer question,
choose a spot to tap - it could be the image.}
 */
const backMainButton;

/**
 * @type{Spot[]}
 * @exposedAs{Select the spot to retry lesson:}
 * @tooltip{It could be the image.}
 */
const retryButton;

/**
 * @type{Spot[]}
 * @exposedAs{All content on introduction quiz:}
 * @tooltip{It could be the image.}
 */
const introQuiz;

/**
 * @type{Spot[]}
 * @exposedAs{Select the spot that sybol of locked achievement:}
 * @tooltip{It could be the image.}
 */
const locked;

/**
 * @type{Spot[]}
 * @exposedAs{Select the spot that sybol of achievement:}
 * @tooltip{It could be the image.}
 */
const unlocked;

let alphabetFirstTry;
let greetingFirstTry;
let alphabetScores;
let greetingScores;
let totalScore;
let highScore;
let achievementStatus;

function start() {
    initiateValue();
    alphabetScores = [0, 0, 0, 0, 0];
    greetingScores = [0, 0, 0, 0, 0];
    totalScore = [0, 0];
    highScore = [0, 0];
    achievementStatus = [false, false];
    alphabetCorrectAnswer.forEach((spot, index) => {
        spot.interaction.onClick(() => {
            firstTryCorrect("alphabet", index);
        });
    });
    alphabetIncorrectAnswer.forEach((spot, index) => {
        spot.interaction.onClick(() => {
            firstTryIncorrect("alphabet", index);
        });
    });
    greetingCorrectAnswer.forEach((spot, index) => {
        spot.interaction.onClick(() => {
            firstTryCorrect("greeting", index);
        });
    });
    greetingIncorrectAnswer.forEach((spot, index) => {
        spot.interaction.onClick(() => {
            firstTryIncorrect("greeting", index);
        });
    });
    retryButton.forEach((spot, index) => {
        spot.interaction.onClick(() => {
            retryQuiz(index);
        });
    });
    backMainButton.forEach((spot) => {
        spot.interaction.onClick(() => {
            backToMain();
        });
    });
    achievementButton.interaction.onClick(checkAchievement);
}

function initiateValue() {
    alphabetFirstTry = [null, null, null, null, null];
    greetingFirstTry = [null, null, null, null, null];
}

function firstTryCorrect(quiz, index) {
    if(quiz == "alphabet") {
        if(alphabetFirstTry[index] == null)
            alphabetFirstTry[index] = true;
        setScore("alphabet", index);
        if(index == 4)
            calculateScore("alphabet");
    }
    if(quiz == "greeting") {
        if(greetingFirstTry[index] == null)
            greetingFirstTry[index] = true;
        setScore("greeting", index);
        if(index == 4)
            calculateScore("greeting");
    }
}

function firstTryIncorrect(quiz, index) {
    index = reindexing(index);
    if(quiz == "alphabet") {
        if(alphabetFirstTry[index] == null)
            alphabetFirstTry[index] = false;
    }
    if(quiz == "greeting") {
        if(greetingFirstTry[index] == null)
            greetingFirstTry[index] = false;
    }
}

function reindexing(index) {
    switch(index) {
        case 0:
        case 1:
            return 0;;
        case 2:
        case 3:
            return 1;
        case 4:
        case 5:
            return 2;
        case 6:
        case 7:
            return 3;
        case 8:
        case 9:
            return 4;
        default:
            log('Out of range');
    }
}

function setScore(quiz, index) {
    if(quiz == "alphabet") {
        if(alphabetFirstTry[index] == true)
            alphabetScores[index] = 20;
        else
            alphabetScores[index] = 10;
    }
    if(quiz == "greeting") {
        if(greetingFirstTry[index] == true)
            greetingScores[index] = 20;
        else
            greetingScores[index] = 10;
    }
}

function calculateScore(quiz) {
    if(quiz == "alphabet") {
        totalScore[0] = alphabetScores.reduce((acc, currentValue) => acc + currentValue, 0);
        setHighScore();
        if(highScore[0] >= 90)
            achievementStatus[0] = true;
        setTimeout(() => showResult("alphabet", totalScore[0]), 1000);
    }
    if(quiz == "greeting") {
        totalScore[1] = greetingScores.reduce((acc, currentValue) => acc + currentValue, 0);
        setHighScore();
        if(highScore[1] >= 90)
            achievementStatus[1] = true;
        setTimeout(() => showResult("greeting", totalScore[1]), 1000);
    }
}

function setHighScore() {
    if(totalScore[0] > highScore[0])
        highScore[0] = totalScore[0];
    if(totalScore[1] > highScore[1])
        highScore[1] = totalScore[1];
}

function showResult(quiz, score) {
    if(score >= 90) {
        passQuiz(score);
    } else {
        failedQuiz(quiz, score);
    }
}

function passQuiz(score) {
    if(score == 100)
        result[4].isVisible = true;
    else
        result[0].isVisible = true;
    backMainButton[1].isVisible = true;
}

function failedQuiz(quiz, score) {
    if(score == 80)
        result[1].isVisible = true;
    else if(score == 70)
        result[2].isVisible = true;
    else if(score == 60)
        result[3].isVisible = true;
    else 
        result[5].isVisible = true;
    if(quiz == "alphabet")
        retryButton[0].isVisible = true;
    else
        retryButton[1].isVisible = true;
}

function backToMain() {
    achievementPage.forEach(element => element.isVisible = false);
    result.forEach(element => element.isVisible = false);
    backMainButton.forEach(element => element.isVisible = false);
    locked.forEach(element => element.isVisible = false);
    unlocked.forEach(element => element.isVisible = false);
    mainMenuPage.forEach(element => element.isVisible = true);
}

function retryQuiz(index) {
    initiateValue();
    result.forEach(element => element.isVisible = false);
    retryButton.forEach(element => element.isVisible = false);
    introQuiz[0].isVisible = true;
    if(index == 0)
        introQuiz[1].isVisible = true;
    else
        introQuiz[2].isVisible = true;
}

function checkAchievement() {
    if(achievementStatus[0])
        unlocked[0].isVisible = true;
    else
        locked[0].isVisible = true;
    if(achievementStatus[1])
        unlocked[1].isVisible = true;
    else
        locked[1].isVisible = true;
}

start();