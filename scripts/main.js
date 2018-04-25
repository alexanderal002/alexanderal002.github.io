//these are the referencers for the change user button and the heading

var myButton = document.querySelector('button');
var myHeading = document.querySelector('h1');

function setUserName() {
	var myName = prompt('Hi! This must be your first time here. In order to create a more personalized experience on my page, please enter your name (or at least whatever you would like to be referred to).');
	localStorage.setItem('name', myName);
	myHeading.textContent = 'Welcome to the home base, ' + myName + '!';
}

//this is the block that structures the app for the naming code

if(!localStorage.getItem('name')) {
	setUserName();
}	else	{
	var storedName = localStorage.getItem('name');
	myHeading.textContent = 'Welcome back, ' + storedName + '!';
}

//and this ties the whole thing together, making the button do the damn thing

myButton.onclick = function() {
	setUserName();
}
