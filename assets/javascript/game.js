//Global Vars
var targetScore,
	currentScore = 0,
	wins = 0,
	losses = 0,
	crystalImages = []
	crystalValues = [];

$('#winCount').text(wins);
$('#lossCount').text(losses);
$('#currentNumber').text(currentScore);

//This function will provide a random target number between 19 and 120 and store it to the targetScore var
function genTargetScore () {
	targetScore = Math.floor(Math.random() * 100) + 19;
	//puts the target score in the html
	$('#scoreDisplay').text(targetScore);
	console.log(targetScore);
}

//using a for loop to push random crystal values into the array
function genCrystalValue () {
	for (var i=0; i < 4; i++){
		var newValue = Math.floor(Math.random() * 12) + 1;
		//checks to make sure we get uniquevalues
		while (crystalValues.indexOf(newValue) !== -1) {
			newValue = Math.floor(Math.random() * 12) + 1;
		}
		//pushes the values into the array
		crystalValues.push(newValue);
	}
	console.log(crystalValues)
}

function assignCrystalValue () {
	genCrystalValue();
	$('.crystalImg').each( function(i) {
		$(this).attr('data-crystalvalue', crystalValues[i])
	})

}

function winCheck () {
	if (currentScore === targetScore) {
		wins++;
		$('#winCount').text(wins);
		$('#winLoss').css("display", "block")
		$('#displayWinCondition').text("You Win!");
		setTimeout(reset, 3000);
	}

	else if (currentScore > targetScore) {
		losses++;
		$('#lossCount').text(losses);
		$('#winLoss').css("display", "block")
		$('#displayWinCondition').text("You Lose! Try Again!");
		setTimeout(reset, 3000);
	}
}

function reset() {
	targetScore = 0;
	currentScore = 0;
	$('#currentNumber').text(currentScore);
	$('#displayWinCondition').text("");
	$('#winLoss').css("display", "none")
	crystalValues = [];
	genTargetScore();
	assignCrystalValue();
}

$('.crystalImg').on('click', function (){
	var crystalSomething = ($(this).attr('data-crystalvalue'));
	console.log("crystal value is: " + crystalSomething);
	currentScore += parseInt(crystalSomething);
	console.log("current score is: " + currentScore);
	$('#currentNumber').text(currentScore);
	winCheck();

})

genTargetScore();
assignCrystalValue();




