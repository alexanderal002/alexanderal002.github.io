var myImage = document.querySelector('img');

//this is the block for making Mozilla=IE memes

myImage.onclick = function() {
    var mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/firefox-icon.png') {
      myImage.setAttribute ('src','images/ie.png');
    } else {
      myImage.setAttribute ('src','images/firefox-icon.png');
    }
}

//these are the referencers for the change user button and the heading

var myButton = document.querySelector('button');
var myHeading = document.querySelector('h1');

function setUserName() {
	var myName = prompt('Please enter your name.');
	localStorage.setItem('name', myName);
	myHeading.textContent = 'Microsoft Edge is cool, ' + myName + '.';
}

//this is the block that structures the app for the naming code

if(!localStorage.getItem('name')) {
	setUserName();
}	else	{
	var storedName = localStorage.getItem('name');
	myHeading.textContent = 'We demand BitCoin, ' + storedName + '. Your computer is ours until we receive this.';
}

//and this ties the whole thing together, making the button do the damn thing

myButton.onclick = function() {
	setUserName();
}