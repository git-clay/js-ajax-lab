var array=[];

var catObject = $.get('https://ga-cat-rescue.herokuapp.com/api/cats')  //pulls all cats from url
	.done(function(data){  //when done do thisvv
	//console.log(data);
	array = jQuery.parseJSON(catObject.responseText); //from JSON string to JQ object. adds object to array
		for (var i = 0; i < array.length; i++) {
		$('#cats').append('<li>'+array[i].name +': ' + array[i].note+'</li>'); //creates and adds current li to ul 
		}
}); 


$(document).ready(function(){ //waits for page load
	$('form').submit(function(e) { //listens for the form submit button
		var $cName = $("#cat-name").val();  //store input from name input field
		var $cNote = $("#cat-note").val();  //store input from name input field
		$.ajax({  //ajax can be used for get,post,put, delete
			type: "POST",
			url: "https://ga-cat-rescue.herokuapp.com/api/cats",
			data: JSON.stringify({ 'name': $cName, 'note': $cNote }), //name and not put into a string that JSON can handle
			dataType: "json"  //important to add, know how to handle info
		}).done(function(cat) {
			console.log(cat);
		$('#cats').append('<li>'+cat+'</li>');  //adds submited info to list without page refresh
		});
		e.preventDefault();  //prevents refresh
	});
});