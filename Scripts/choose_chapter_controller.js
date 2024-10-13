/**
 * @type{Spot[]}
 * @exposedAs{All content on main menu page:}
 * @tooltip{It could be the image.}
 */
const mainMenuPage;

/**
 * @type{Spot[]}
 * @exposedAs{All content on choose chapter page:}
 * @tooltip{It could be the image.}
 */
const chooseChapterPage;

/**
 * @type{Spot[]}
 * @exposedAs{All content on alphabet section:}
 * @tooltip{It could be the 3d model, holopresenter, image.}
 */
const alphabetEnvironment;

/**
 * @type{Spot[]}
 * @exposedAs{All content on greeting section:}
 * @tooltip{It could be the 3d model, holopresenter, image.}
 */
const greetingEnvironment;

/**
 * @type{Spot}
 * @exposedAs{Select the spot to show 2D alphabet element:}
 * @tooltip{It could be the holopresenter.}
 */
const alphabetElemen;

/**
 * @type{Spot[]}
 * @exposedAs{Select the holopresenter:}
 * @tooltip{It could be the holopresenter.}
 */
const alphabetHolopresenter;

/**
 * @type{Spot}
 * @exposedAs{Select the holopresenter:}
 * @tooltip{It could be the holopresenter.}
 */
const greetingHolopresenter;

/**
 * @type{Spot[]}
 * @exposedAs{List button for choosing chapter:}
 * @tooltip{It could be the image.}
 */
const chapterButton;

/**
 * @type{Spot[]}
 * @exposedAs{Select the spot to show intro quiz:}
 * @tooltip{It could be the image.}
 */
const introQuiz;

/**
 * @type{Spot[]}
 * @exposedAs{Select the spot to show intro quiz:}
 * @tooltip{It could be the image.}
 */
const introQuiz1;

/**
 * @type{Spot}
 * @exposedAs{Select the spot to back to main menu page:}
 * @tooltip{It could be the image.}
 */
const closeButton;

function start() {
    chapterButton[0].interaction.onClick(() => {
        playAlphabet();
    });
    chapterButton[1].interaction.onClick(() => {
        playGreeting();
    });
    closeButton.interaction.onClick(() => {
        closeChooseChapter();
    });
}

function playAlphabet() {
    chooseChapterPage.forEach(element => element.isVisible = false);
    alphabetEnvironment.forEach(element => element.isVisible = true);
    setTimeout(showAlphabet, 17500);
}

function playGreeting() {
    chooseChapterPage.forEach(element => element.isVisible = false);
    greetingEnvironment.forEach(element => element.isVisible = true);
    setTimeout(greetingQuiz, 26000);
}

function closeChooseChapter() {
    chooseChapterPage.forEach(element => element.isVisible = false);
    mainMenuPage.forEach(element => element.isVisible = true);
}

function showAlphabet() {
    alphabetElemen.isVisible = true;
    setTimeout(alphabetQuiz, 73500);
}

function alphabetQuiz() {
    alphabetHolopresenter.forEach(element => element.isVisible = false);
    introQuiz.forEach(element => element.isVisible = true);
}

function greetingQuiz() {
    greetingHolopresenter.isVisible = false;
    introQuiz1.forEach(element => element.isVisible = true);
}

start();