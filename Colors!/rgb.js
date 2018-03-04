var messageDisplay = document.querySelector('#message');
var squares = document.querySelectorAll(".square");
var easyBtn = document.querySelector('#easyBtn');
var hardBtn = document.querySelector('#hardBtn');
// var colors = ['rgb(255, 0, 0)',
// 	'rgb(255, 255, 0)',
// 	'rgb(0, 255, 0)',
// 	'rgb(0, 0, 255)',
// 	'rgb(0, 255, 255)',
// 	'rgb(255, 0, 255)'
// ]
var colors = randomArray(6);
var pickedColor = pickColor();
var colorDisplay = document.getElementById('colorDisplay');
colorDisplay.textContent = pickedColor.toUpperCase();
var h1Background = document.querySelector('h1');
var resetButton = document.querySelector('#reset');
var playAgain = 0;
hardBtn.classList.add('hover');

easyBtn.addEventListener('click', function(){
	easyBtn.classList.add('selected');
	hardBtn.classList.remove('selected');
	for(var i = 3; i < 6; i++){
		squares[i].style.backgroundColor = '#232323'
	}
	reset(3)
	playAgain = 1;
	hardBtn.classList.remove('hover')
	easyBtn.classList.add('hover')
})

hardBtn.addEventListener('click', function(){
	hardBtn.classList.add('selected');
	easyBtn.classList.remove('selected');
	reset(6)
	playAgain = 2;
	hardBtn.classList.add('hover')
	easyBtn.classList.remove('hover')
})


resetButton.addEventListener('click', function(){
	if (playAgain == 1){
		reset(3);
	}
	else{
		reset(6);
	}
	for (var i = 0; i < playAgain*3; i++){
		squares[i].addEventListener('click', function(){
			//alert(this.style.backgroundColor);
			var clicked = this.style.backgroundColor;
			
			if (clicked == pickedColor){
				messageDisplay.textContent = 'Correct!';
				changeColors(pickedColor);
				h1Background.style.backgroundColor = pickedColor;
			}
			else{
				this.style.backgroundColor = '#232323';
				messageDisplay.textContent = 'Try Again.';
			}
	})
	}
	})





for(var i = 0; i < squares.length; i++){
	squares[i].style.backgroundColor = colors[i];
	squares[i].addEventListener('click', function(){
		//alert(this.style.backgroundColor);
		var clicked = this.style.backgroundColor;
		
		if (clicked == pickedColor){
			messageDisplay.textContent = 'Correct!';
			changeColors(pickedColor);
			h1Background.style.backgroundColor = pickedColor;
			resetButton.textContent = 'Play Again?';
		}
		else{
			this.style.backgroundColor = '#232323';
			messageDisplay.textContent = 'Try Again.';
		}
	})

}
function reset(number){
	colors = randomArray(number);
	pickedColor = pickColor();
	colorDisplay.textContent = pickedColor;
	h1Background.style.backgroundColor = 'steelblue';
	this.textContent = 'New Game';
	messageDisplay.textContent = '';
	for(var i = 0; i < squares.length; i++){
		squares[i].style.backgroundColor = colors[i];
	}
	}

function changeColors(color){
	for(var i = 0;i < colors.length; i++){
		squares[i].style.backgroundColor = color;
	}
}

function pickColor(){
	var number = Math.floor(colors.length*Math.random())
	return colors[number]
}

function randomArray(number){
	var ans = [];
	for(var i = 0; i < number; i++){
		first = random255().toString();
		second = random255().toString();
		third = random255().toString();
		string = 'rgb('+first+', '+second+', '+third+')';
		ans.push(string)
	}
	return ans
}

function random255(){
	return Math.floor(256*Math.random())
}