
$(document).ready(function(){
	
/*--- Display information modal box ---*/
$(".what").click(function(){
$(".overlay").fadeIn(1000);

});

 /*--- Hide information modal box ---*/
 $("a.close").click(function(){
 $(".overlay").fadeOut(1000);
});


 /*my code*/

$('#guessButton').click(function(){
playGame();
event.preventDefault();
});

$('.new').click(function(){
  newGame();
});

});//document ready ends here

	
	
var random=Math.floor(Math.random()*100 + 1);



function playGame(){

	var guess=$('#userGuess').val();
	var howClose=(Math.abs(random-guess));
	
	
	if (guess >= 101 || guess <= 0 || isNaN(guess)){
	$('#feedback').text('Guess a number between 1 and 100');
	return false;
	}



	if ((howClose<=100) && (howClose>=50)){
		
		$('#feedback').text('You are ice cold');
	}
	if ((howClose<=49) && (howClose>=30)){
		
		$('#feedback').text('You are cold');
	}
	if ((howClose<=29) && (howClose>=10)){
		
		$('#feedback').text('Your are warm');
	}
	if ((howClose<=9) && (howClose>=1)){
		$('#feedback').text('Your are hot');
	}
	if (howClose===0){
		$('#feedback').text('You guessed it!');
		$("#userGuess").prop("disabled",true );
		$('#guessButton').click(function(){
			$('#feedback').text('You have already won silly! Start a new game')
		});

	}


$('#guessList').append('<li>' + guess); //same thing as <li>+guess+</li>


	var countGuess=$('#guessList').children().length;
	$('#count').text(countGuess);
	
	$('#userGuess').val("");

}//end playGame function


function newGame(){
	$('#feedback').text('Make your Guess!');
	$('#count').text('0');
	$('#userGuess').val("");
	$('#guessList').children('li').remove();
	$("#userGuess").prop("disabled",false );
	random=null;
}






