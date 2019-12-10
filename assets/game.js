// JavaScript source code

var secretLetter = [a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z];
var wins = 0;
var losses = 0;
var playAgain = true;
var numGuesses = 9;

while(playAgain){
	while(numGuesses !== 0){
		var currentLetter = secretLetter[rand(i) * Math.floor(secretLetter.length) /*round to nearest whole number*/];
		var userInput = prompt("select a letter!");
		if (userInput === currentLetter){
			numGuesses = 9;
			var currentLetter = secretLetter[rand(i) * Math.floor(secretLetter.length) /*round to nearest whole number*/];
			//clear input
			wins++;
		}
		else{
			numGuesses--;
			document.write(userInput)
		}
	losses++;
	numGuesses = 9
	//clear input
	var currentLetter = secretLetter[rand(i) * Math.floor(secretLetter.length) /*round to nearest whole number*/];
	}
	playAgain = confirm("Do you want to play again?")
}
alert("Thanks for playing!");