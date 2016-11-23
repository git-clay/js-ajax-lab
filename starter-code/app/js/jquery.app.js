var array=[];

var catObject = $.get('https://ga-cat-rescue.herokuapp.com/api/cats')
.done(function(data){
//console.log(data);
array = jQuery.parseJSON(catObject.responseText);
	for (var i = 0; i < array.length; i++) {
	
	$('#cats').append('<li>'+array[i].name +': ' + array[i].note+'</li>');
	}
}); 


$(document).ready(function(){
	$('form').submit(function(e) {
		var $cName = $("#cat-name").val();
		var $cNote = $("#cat-note").val();
		$.ajax({
			type: "POST",
			url: "https://ga-cat-rescue.herokuapp.com/api/cats",
			data: JSON.stringify({ 'name': $cName, 'note': $cNote }),
			dataType: "json"
		}).done(function(cat) {
			console.log(cat);
		});
		e.preventDefault();
	});
});