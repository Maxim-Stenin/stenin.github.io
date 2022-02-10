
let myNewPic = document.querySelector('img');
myNewPic.onclick = function() {
    var mySrc = myNewPic.getAttribute('src');
    if(mySrc === 'images/js.png') {
      myNewPic.setAttribute ('src','images/js2.png');
    } else {
      myNewPic.setAttribute ('src','images/js.png');
    }
}
var myButton = document.querySelector('button');
var myHeading = document.querySelector('h1');
function setUserName() {
    var myName = prompt('Пожалуйста, введите ваше имя.');
    localStorage.setItem('name', myName);
    myHeading.textContent = 'Добро пожаловать, ' + myName;
  }
  if(!localStorage.getItem('name')) {
    setUserName();
  } else {
    var storedName = localStorage.getItem('name');
    myHeading.textContent = 'Добро пожаловать, ' + storedName;
  }
  myButton.onclick = function() {
    setUserName();
  }