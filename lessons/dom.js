// var tag = document.getElementById('high');
// var tags = document.getElementsByClassName('bold');
// var tags2 = document.getElementsByTagName('li');

// // still returns a list even though there's only 1

// // editing css by selector
// var tag2 = document.querySelector('#high') 
// console.log(tag2.textContent)
// console.log(tag2.textContent)
// //method innerHTML maintains the text but also html tags like strong, em etc.
// // query selector only returns first element if it's something like a class or header
// var tag3 = document.querySelectorAll('li')


// //DOM MANIPULATION

// //select
// var newTag = document.getElementById('high')
// newTag.style.color = 'blue';
// // can edit styles of an html element directly through style  

// // var newTag2 = document.getElementById('high');
// // newTag2.style.color = 'red';
// // newTag2.style.border = '10px solid red';

//  // in css ->
//  // .class{
//  // 	color:blue;
//  // 	border: 10px solid red
//  // }
//  // newTag2.classList.add('class') -> contains the clacsses for a given element, can do add, remove, toggle, is not an array so these methods only.

// //method getAttribute() and setAttribute() read and write attributes like src and href
// // var link = document.querySelector('a')
// // link.setAttribute('href', 'http://google.com')
var button = document.querySelector('button')
var paragraph = document.querySelector('p')
newFunc = function(){
	paragraph.textContent = 'Button was clicked!'
}
button.addEventListener('click', newFunc)