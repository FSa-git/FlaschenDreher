/** JS-File to open hidden div-containers */

// Open the div-container for the settings
document.getElementById('settingWheel').addEventListener('click', function() {
    let selectionDiv = document.querySelector('.selection');
    if (selectionDiv.style.display === 'none' || selectionDiv.style.display === '') {
        selectionDiv.style.display = 'block';
    } 
    else {
        selectionDiv.style.display = 'none';
    }
});

// Open the div-container for the language selection
document.getElementById('translate').addEventListener('click', ()=>{
    let translationDiv = document.querySelector('.languages');
    let close = document.getElementById('close');
    let logo = document.getElementById('translateLogo');
    let wheel = document.getElementById('settingWheel');

    if(translationDiv.style.display === 'none' || translationDiv.style.display === '') {
        translationDiv.style.display = 'block';
        close.style.display = 'block';
        logo.style.display = 'none';
        wheel.style.display = 'none';
    }
    else {
        translationDiv.style.display = 'none';
        close.style.display = 'none';
        logo.style.display = 'block';
        wheel.style.display = 'flex';
    }
});