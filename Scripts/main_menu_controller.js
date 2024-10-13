/**
 * @type{Spot}
 * @exposedAs{Select the spot to choose chapter page:}
 * @tooltip{It could be the image.}
 */
const playButton;

/**
 * @type{Spot}
 * @exposedAs{Select the spot to open achievement page:}
 * @tooltip{It could be the image.}
 */
const achievementButton;

/**
 * @type{Spot}
 * @exposedAs{Select the spot to open credit page:}
 * @tooltip{It could be the image.}
 */
const creditButton;

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
 * @exposedAs{All content on achievemen page:}
 * @tooltip{It could be the image.}
 */
const achievementPage;

/**
 * @type{Spot[]}
 * @exposedAs{All content on credit page:}
 * @tooltip{It could be the image.}
 */
const creditPage;

function start() {
    playButton.interaction.onClick(() => {
        chooseChapter();
    });
    achievementButton.interaction.onClick(() => {
        openAchievement();
    });
    creditButton.interaction.onClick(() => {
        openCredit();
    });
}

function chooseChapter() {
    mainMenuPage.forEach(element => element.isVisible = false);
    chooseChapterPage.forEach(element => element.isVisible = true);
}

function openAchievement() {
    mainMenuPage.forEach(element => element.isVisible = false);
    achievementPage.forEach(element => element.isVisible = true);
}

function openCredit() {
    mainMenuPage.forEach(element => element.isVisible = false);
    creditPage.forEach(element => element.isVisible = true);
}

start();