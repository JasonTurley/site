var darkMode = document.getElementById('dark-mode-button');
var darkModeOn = false; 

darkMode.onclick = function() {
    if (darkModeOn === false) {
        // Turn dark mode on
        document.body.style.backgroundColor = 'black';
        document.body.style.color = 'white';
        darkModeOn = true;
    } else {
        // Turn dark mode off
        document.body.style.backgroundColor = 'rgb(240, 212, 209)';
        document.body.style.color = 'black';
        darkModeOn = false;
    }
}