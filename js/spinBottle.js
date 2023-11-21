console.log("spinBottle.js loaded");

const spinButton = document.getElementById("spinButton");
const bottle = document.getElementById('bottle');

spinButton.addEventListener("click", function () {
    spinBottle('bottle');
});

bottle.addEventListener("click", function () {
    spinBottle('bottle');
});

let rotationDirection = 1; // 1 für Uhrzeigersinn, -1 für gegen den Uhrzeigersinn

function spinBottle(bottleId) {
    console.log("Bottle spun!");

    disableHomeTitle();

    // Get the bottle element
    let bottle = document.getElementById(bottleId);
    bottle.style.transition = 'transform 2s ease-in-out';

    // Casual rotation between 720 and 1080 degrees
    let initialRotation = Math.floor(Math.random() * 720) + 1080;
    bottle.style.transform = 'rotate(' + initialRotation * rotationDirection + 'deg)';

    // Nachdem die Animation abgeschlossen ist, entferne den Übergang und füge die neue Klasse hinzu
    setTimeout(function () {
        let rotationDegrees = Math.floor(Math.random() * 360) + 720;
        bottle.style.transform = 'rotate(' + rotationDegrees * rotationDirection + 'deg)';

        // Richtung für den nächsten Spin umkehren
        rotationDirection *= -1;

        setTimeout(function () {
            bottle.style.transition = '';
            yourTurnEffect();
        }, 2000);
    }, 200);
}

function yourTurnEffect() {

    let text = document.getElementById('yourTurn');
    text.style.transition = 'transform 0.3s ease-in-out';
    text.style.transform = 'scale(1.7)';

    // Set the transform style back to normal after 0.3s
    setTimeout(function () {
        text.style.transform = 'scale(1)';
    }, 300);
}

function disableHomeTitle() {

    let textTitle = document.getElementById('homeTitle');
    textTitle.style.transition = 'transform 0.3s ease-in-out';
    textTitle.style.transform = 'scale(0)';

}