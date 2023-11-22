/** JS-File to select the language */

function changeLanguage(languageCode, element) {

if (languageCode === 'en'){
    document.getElementById('homeTitle').innerText = 'Spin the bottle!';
    document.getElementById('yourTurn').innerText = 'Your turn!';
    document.getElementById('spinButton').innerText = 'Spin';
    document.getElementById('aboutText').innerText = 'About';
}
else if (languageCode === 'de') {
    document.getElementById('homeTitle').innerText = 'Flaschendrehen!';
    document.getElementById('yourTurn').innerText = 'Du bist dran!';
    document.getElementById('spinButton').innerText = 'Dreh die Flasche';
    document.getElementById('aboutText').innerText = 'Über das Projekt';
}
else if (languageCode === 'it') {
    document.getElementById('homeTitle').innerText = 'Gira la bottiglia!';
    document.getElementById('yourTurn').innerText = 'È il tuo turno';
    document.getElementById('spinButton').innerText = 'Gira';
    document.getElementById('aboutText').innerText = 'Il progetto';
}

var items = document.getElementsByClassName('language–item');
    for (var i = 0; i < items.length; i++) {
        items[i].classList.remove('selected');
    }
    element.classList.add('selected');

}