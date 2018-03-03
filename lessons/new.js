// alert('Hello from the js file!')
// var user = prompt('What is your name?')
// alert('Nice To Meet You '+ user + '!')
// console.log('Also nice to meet you:' + user + '!')
var first = prompt('What is your first name?')
// var first = prompt("What is your first name?)
var second = prompt('What is your second name?')
var age = prompt('What is your age?')
console.log('Your name is: '+first + ' '+ second + '.')
console.log('You are: ' + age + ' years old')

for(var i = 0; i < 6; i++){
	console.log(i)
}
function isEven(n){
	return n % 2 == 0;
}
function factorial(n){
	if (n == 1){
		return 1
	}
	else{
		return n*factorial(n-1)
	}
}

function r
function square(n){
	return n > 0 && Math.sqrt(n)%1 === 0;
}
if (age <= 0){
	console.log('Sorry, Error')
}
else if(age <=18){
	console.log('You are Underage.')
}
if(age == 21){
	console.log('happy 21st birthday!')
}
if (age % 2 == 1){
	console.log('your age is odd')
}
if(square(age)){
	console.log('perfect square')
}


// var number = Math.floor((Math.random()*100)+1);
// var guess;
// while (guess != number){
// 	guess = prompt('Guess a number between 1 and 100.')
// 	if (guess >number){
// 		alert('Guess too high, try again!')
// 	}
// 	else if(guess < number){
// 		alert('Guess was too low, try again!')
// 	}
// 	else{
// 		alert('You guessed correctly, the number was: '+ guess)
// 	}
	
// }