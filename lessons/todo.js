alert('connected to js file!');
var allLi = document.querySelectorAll('li');

for (var i = 0;i < allLi.length; i++){
	allLi[i].addEventListener("mouseover", function(){

		this.classList.add('green'); // triggers on the event it's referred to
	})
	allLi[i].addEventListener("mouseout", function(){
		this.classList.remove('green');
	})
	allLi[i].addEventListener('click', function(){
		this.classList.toggle('done')
	})
}