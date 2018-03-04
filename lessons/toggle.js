alert('connected!');
var b1 = document.querySelector('#one');
var b2 = document.getElementById('two');
var b3 = document.getElementById('reset')
var score1 = 0;
var score2 = 0;
var game_running = true;
var s1 = document.querySelectorAll('span')[0]
var s2 = document.querySelectorAll('span')[1]
var maxScore = 5;
var newMax = document.getElementById('maxscore')
var winner = 0;
var userMax = document.getElementById('user')

b3.addEventListener('click', function(){
	game_running = true;
	score1 = 0;
	score2 = 0;
	s2.textContent = 0;
	s1.textContent = 0;
	if (winner == 2){
		s2.classList.remove('green')
	}
	else{
		s1.classList.remove('green')
	}
})

userMax.addEventListener('change', function(){
	maxScore = userMax.value;
	newMax.textContent = maxScore;
})

b2.addEventListener('click', function(){
	if (game_running){
		score2++;
		s2.textContent = score2;
		
	
		if (score2 == maxScore){
			s2.classList.add('green');
			game_running = false;
			winner = 2;
		}
	}	
})

b1.addEventListener('click', function(){
	if (game_running){
		score1++;
		s1.textContent = score1;
	
		if (score1  >= maxScore){
			game_running = false;
			s1.classList.add('green');
			winner = 1;
		}
	}
})



// var button = document.querySelector("button");
// // var body = document.querySelector('body');

// // var counter = 0;
// button.addEventListener("click", function(){
// 	// if (counter % 2 == 0){
// 	// 	body.style.background = '#ff69b4';
// 	// }
// 	// else{
// 	// 	body.style.background= '#ffffff';
// 	// }
// 	// counter += 1;
// 	document.body.classList.toggle("purple");
// })