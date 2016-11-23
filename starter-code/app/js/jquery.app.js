var array=[];

var catObject = $.get('https://ga-cat-rescue.herokuapp.com/api/cats')
.done(function(data){
console.log(data);
array = jQuery.parseJSON(catObject.responseText);
	for (var i = 0; i < array.length; i++) {
	
	$('#cats').append('<li>'+array[i].name +' ' + array[i].note+'</li>');

	}

console.log(array.val);
}); 

