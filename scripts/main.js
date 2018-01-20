var myImage = document.querySelector('img');

myImage.onclick = function () {
    var mySrc = myImage.getAttribute('src');
    if (mySrc === 'images/gurren-skull.png') {
        myImage.setAttribute('src', 'images/shade.png');
    } else {
        myImage.setAttribute('src', 'images/gurren-skull.png');
    }
}
var myButton = document.querySelector('button');
var myHeading = document.querySelector('h1');

function setUserName() {
    var myName = prompt('Please enter your name');
    localStorage.setItem('name', myName);
    myHeading.textContent = 'Pierce the heavens, ' + myName;
}
if (!localStorage.getItem('name')) {
    setUserName();
} else {
    var storedName = localStorage.getItem('name');
    myHeading.textContent = 'Pierce the heavens, ' + storedName;
}
myButton.onclick = function () {
    setUserName();
}