/**
 * @type{Spot[]}
 * @exposedAs{All content on main menu page:}
 * @tooltip{It could be the image.}
 */
const mainMenuPage;

/**
 * @type{Spot[]}
 * @exposedAs{All content on first credit page:}
 * @tooltip{It could be the image.}
 */
const firstPage;

/**
 * @type{Spot[]}
 * @exposedAs{All content on second credit page:}
 * @tooltip{It could be the image.}
 */
const secondPage;

/**
 * @type{Spot[]}
 * @exposedAs{All content on third credit page:}
 * @tooltip{It could be the image.}
 */
const thirdPage;

/**
 * @type{Spot[]}
 * @exposedAs{Select the spot to show next credit page:}
 * @tooltip{It could be the image.}
 */
const nextButton;

/**
 * @type{Spot}
 * @exposedAs{Select the spot to back to main menu page:}
 * @tooltip{It could be the image.}
 */
const closeButton;

function start() {
    nextButton.forEach((spot, index) => {
        spot.interaction.onClick(() => {
            nextPage(index);
        });
    });
    closeButton.interaction.onClick(() => {
        closeCredit();
    });
}

function nextPage(index) {
    switch(index) {
        case 0:
            firstPage.forEach(element => element.isVisible = false);
            secondPage.forEach(element => element.isVisible = true);
            break;
        case 1:
            secondPage.forEach(element => element.isVisible = false);
            thirdPage.forEach(element => element.isVisible = true);
            break;
        default:
            log('Out of range')
    }
}

function closeCredit() {
    thirdPage.forEach(element => element.isVisible = false);
    mainMenuPage.forEach(element => element.isVisible = true);
}

start();