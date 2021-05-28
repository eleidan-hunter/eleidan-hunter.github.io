let rollDice = 0;
let RollDiceBtn = document.querySelector('.dice_roll');
let RiceOutput = document.querySelector('.dice_output');
let HealthPoint = document.querySelector('.health_max');
let PlayerCard1 = document.querySelector('.player_1')
let PlayerCard2 = document.querySelector('.player_2')

let health = 100;

HealthPoint.innerHTML = (`<div class="health_indicator" style="width: ${health}%;"></div>`);
RollDiceBtn.addEventListener('click', diceRoll);
RollDiceBtn.addEventListener('click', changePlayer);

// смена игроков после броска
let playerCheck = true;

function changePlayer(){
	if( playerCheck === true){
		PlayerCard1.style.cssText='border:2px solid red';
		PlayerCard2.style.cssText='border:2px solid #000';
		playerCheck = false
	} else if (playerCheck === false){
		PlayerCard1.style.cssText='border:2px solid #000';
		PlayerCard2.style.cssText='border:2px solid red';
		playerCheck = true;
	}
}

// === уменьшение очков здоровья по броску кубика
function hitResult (){

	health -= rollDice
	HealthPoint.innerHTML = (`<div class="health_indicator" style="width: ${health}%;"></div>`)
	if( health <=0 ){
		alert('GAME OVER');
		health = 100;
	}	
}

// === генерация броска кубика
function diceRoll(){
	rollDice = Math.round(1 + Math.random() * (6 - 1));
	console.log('rollDice',rollDice);

	switch(rollDice){
		case 1:
			RiceOutput.style.cssText='background: url(img/dice1.svg);';
			break;
		case 2:
			RiceOutput.style.cssText='background: url(img/dice2.svg);';
			break;
		case 3:
			RiceOutput.style.cssText='background: url(img/dice3.svg);';
			break;
		case 4:
			RiceOutput.style.cssText='background: url(img/dice4.svg);';
			break;
		case 5:
			RiceOutput.style.cssText='background: url(img/dice5.svg);';
			break;
		case 6:
			RiceOutput.style.cssText='background: url(img/dice6.svg);';
			break;
	}
		// if( player1Check === true){
		// 	PlayerCard1.style.cssText='border:2px solid red';
		// 	PlayerCard2.style.cssText='border:2px solid #000';
		// 	player1Check = false
		// } else if (player1Check === false){
		// 	PlayerCard1.style.cssText='border:2px solid #000';
		// 	PlayerCard2.style.cssText='border:2px solid red';
		// 	player1Check = true;
		// }
	
	
	
	hitResult(health, rollDice);
}