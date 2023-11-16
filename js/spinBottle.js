console.log("spinBottle.js loaded");

function spinBottle(bottleId) {
    console.log("Bottle spun!");

    // Get the bottle element
    let bottle = document.getElementById(bottleId);
    bottle.style.transition = 'transform 2s ease-in-out';

    // Casual rotation between 720 and 1080 degrees
    let initialRotation = Math.floor(Math.random() * 720) + 1080;
    bottle.style.transform = 'rotate(' + initialRotation + 'deg)';

    // After the animation is done, remove the transition and add the new class
    setTimeout(function () {
        let rotationDegrees = Math.floor(Math.random() * 360) + 720;
        bottle.style.transform = 'rotate(' + rotationDegrees + 'deg)';

        setTimeout(function () {
            bottle.style.transition = '';
        }, 2000);

    }, 200);
}
