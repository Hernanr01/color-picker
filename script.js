var colors = ["cyan", "aliceblue", "darkmagenta", "gold", "azure", "green", "moccasin"];
var index = 0;

$(document).ready(function() {

	// When somebody clicks the "Change Color" button...
	$('#change').on('click', function() {

		// ...change the background color to a color in the the array "colors"
		$("body").css("background-color", colors[index]);

		// How could you update index, so that the background color changes everytime this function runs?


	});
});