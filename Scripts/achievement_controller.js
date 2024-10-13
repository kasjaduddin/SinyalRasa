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
 * @type{Spot}
 * @exposedAs{Select the spot to back to main menu page:}
 * @tooltip{It could be the image.}
 */
const closeButton;

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

function start() {
    achievementButton.interaction.onClick(checkAchievement);
    closeButton.interaction.onClick(() => {
        closeAchievement();
    });
}

function closeAchievement() {
    achievementPage.forEach(element => element.isVisible = false);
}

function checkAchievement() {
    if (localStorage.getItem('first_achievement') == 'true') {
        locked[0].interaction.isVisible = false;
        unlocked[0].interaction.isVisible = true;
    }
    else {
        locked[0].interaction.isVisible = true;
        unlocked[0].interaction.isVisible = false;
    }

    if (localStorage.getItem('second_achievement') == 'true') {
        locked[1].interaction.isVisible = false;
        unlocked[1].interaction.isVisible = true;
    }
    else {
        locked[1].interaction.isVisible = true;
        unlocked[1].interaction.isVisible = false;
    }
}

start();