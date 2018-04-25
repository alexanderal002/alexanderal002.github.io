//these are the referencers for the change user button and the heading

var myButton = document.querySelector('button');
var myHeading = document.querySelector('h1');

//this is the block that prompts users for their name the first time they visit the main page

function setUserName() {
	var myName = prompt('Hi! This must be your first time here. In order to create a more personalized experience on my page, please enter your name (or at least whatever you would like to be referred to).');
	localStorage.setItem('name', myName);
	myHeading.textContent = 'Welcome to the home base, ' + myName + '!';
}

//this is the block that tests for the presence of name data and welcomes users back to the site

if(!localStorage.getItem('name')) {
	setUserName();
}	else	{
	var storedName = localStorage.getItem('name');
	myHeading.textContent = 'Welcome back, ' + storedName + '!';
}

//this is the structure code for what happens when users click the "Change Name" button, should they not like the name (which, they decided on in the first place, so who's fault is it they need to change it, really?)

function changeUserName() {
	var myName = prompt('So, you want to change what we call you around here? Sure! What name should we call you by? (also note: your name is stored locally, so this all boils down to personalization- I will never know what you tell my website to call you)');
	localStorage.setItem('name', myName);
	myHeading.textContent = 'Welcome to the home base, ' + myName + '!';
}

//this triggers the button to perform the function directly above

myButton.onclick = function() {
	changeUserName();
}
