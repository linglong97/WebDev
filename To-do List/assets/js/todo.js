
$('ul').on('click','li',function(){
	$(this).toggleClass('completed');
	// if($(this).css('color') == "rgb(128, 128, 128)"){
	// 	// console.log('this is grey');
	// 	$(this).css({
	// 		color:'black',
	// 		textDecoration: 'none'
	// 	})
	// }
	// else{$(this).css({
	// 	color: 'gray',
	// 	textDecoration: 'line-through'});}
	
})
$('input[type = "text"]').keypress(function(e){
	if (e.which == 13){
		var text = $(this).val();
		var newText = '<li><span><i class = "fa fa-trash"></i></span> '+text+'</li>'
		$('ul').append(newText)
		$(this).val('');
	}
})

$('#open').on('click', function(){
	$('input').fadeToggle();
})
$('ul').on('click', 'span', function(e){
	$(this).parent().fadeOut(500,function(){
		$(this).remove();
	})
	e.stopPropagation();

})