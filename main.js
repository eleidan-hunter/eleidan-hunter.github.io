let rollDice = 0;
let StartButton = document.querySelector('.start_button');
let RollDiceBtn = document.querySelector('.dice_roll');
let RiceOutput = document.querySelector('.dice_output');
let HealthPoint1 = document.querySelector('.health_max_1');
let HealthPoint2 = document.querySelector('.health_max_2');
let PlayerCard1 = document.querySelector('.player_1')
let PlayerCard2 = document.querySelector('.player_2')

let health1 = 0;
let health2 = 0;


StartButton.addEventListener('click', startStop)
RollDiceBtn.addEventListener('click', diceRoll);
RollDiceBtn.addEventListener('click', changePlayer);

// начало и конец игры
function startStop(){
	health1 = 100;
	health2 = 100;
	HealthPoint1.innerHTML = (`<div class="health_indicator_1" style="width: ${health1}%;"></div>`);
	HealthPoint2.innerHTML = (`<div class="health_indicator_2" style="width: ${health2}%;"></div>`);
	PlayerCard1.style.cssText='border:2px solid #000';
	PlayerCard2.style.cssText='border:2px solid #000';
	// if( health1 <=0 || health2 <= 0){
	// 	alert('GAME OVER');
	// 	health1 = 100;
	// 	health2 = 100;
	// }	

}

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
	if( playerCheck === true){
		health1 -= rollDice *10
		HealthPoint1.innerHTML = (`<div class="health_indicator_1" style="width: ${health1}%;"></div>`)
	} else {
		health2 -= rollDice *10
		HealthPoint2.innerHTML = (`<div class="health_indicator_2" style="width: ${health2}%;"></div>`)
	}
		
	if( health1 <=0 || health2 <= 0){
		alert('GAME OVER');
		health1 = 100;
		health2 = 100;
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
	hitResult(health1, health2, rollDice);
}