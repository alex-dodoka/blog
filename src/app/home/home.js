'use strict';

const
    changeColorBlockId = "background-changes",
    timeoutForChangingPicture = 8000, //in milliseconds
    cssSelectorBackground = "background",
    imagesForBackground = [
        'url(./assets/img/bg01.jpg) repeat-y fixed',
        'url(./assets/img/bg02.jpg) repeat-y fixed',
        'url(./assets/img/bg03.jpg) repeat-y fixed'];

$(document).ready(function () {

    /**
     *get articles from server
     * */
    getDataFromServer();

    /**
     *change background images
     * */
    changeBackgroundWithTimeout(); //Function will work endlessly

});

function changeBackgroundWithTimeout() {
    setTimeout(function () {
        var randomNumber = getRandomNumber(0, imagesForBackground.length - 1);
        changeCss(changeColorBlockId, cssSelectorBackground, imagesForBackground[randomNumber]);
        changeBackgroundWithTimeout(); //Recursive call to itself
    }, timeoutForChangingPicture);
}

function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function changeCss(id, selector, value) {
    $("#" + id).css(selector, value);
}
