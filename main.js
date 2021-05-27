


// let minDice = 1;
// let maxDice = 6;
let rollDice = 1;
let rollDiceBtn = document.querySelector('.diceRoll');
let diceOutput = document.querySelector('.diceOutput');
rollDiceBtn.onclick = diceRoll;

let healthPoint = document.querySelector('.healthMax');
let health = 100;
healthPoint.innerHTML = (`<div class="healthIndicator" style="width: ${health}%;"></div>`)

//GENERATE DICE ROLL RESULT
function diceRoll(){
	rollDice = Math.round(1 + Math.random() * (6 - 1));
	console.log('rollDice',rollDice);

	switch(rollDice){
		case 1:
			diceOutput.style.cssText=`background: url(img/dice1.svg);`;
			break;
		case 2:
			diceOutput.style.cssText=`background: url(img/dice2.svg);`;
			break;
		case 3:
			diceOutput.style.cssText=`background: url(img/dice3.svg);`;
			break;
		case 4:
			diceOutput.style.cssText=`background: url(img/dice4.svg);`;
			break;
		case 5:
			diceOutput.style.cssText=`background: url(img/dice5.svg);`;
			break;
		case 6:
			diceOutput.style.cssText=`background: url(img/dice6.svg);`;
			break;
	}
	
	hitResult(health, rollDice);
}



// BEHAVIOR INCREASE HEALTH POINT
function hitResult (){

	health -= rollDice
	healthPoint.innerHTML = (`<div class="healthIndicator" style="width: ${health}%;"></div>`)
	if( health <=0 ){
		alert('GAME OVER');
		health = 100;
	}	
}

console.log('rollDice',rollDice);
