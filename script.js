
// генератор случайных чисел
let rollDiceBtn = document.getElementById("rollDice");

function generateRandomNumber() {
    let randomNum = Math.floor(Math.random() * 6) + 1;
    console.log(randomNum);
}
  
rollDiceBtn.addEventListener('click', generateRandomNumber);  
let answerYes = 0;
let answerNo = 0;
function generateAnswer() {
    // Установите вероятность ответа "да" (от 0 до 1)
    let probability = 1/2;
    let probabilityOfYes = probability;
  
    // Генерируем случайное число от 0 до 1
    let randomNum = Math.random();
  
    // Выводим "да" или "нет" в зависимости от вероятности
    let answer = (randomNum < probabilityOfYes) ? 'да' : 'нет';
    
    
    
    if(answer == 'да'){
        answerYes += 1;
    } else {
        answerNo += 1
    }

    let stat = answerNo/answerYes;
    // Отображаем ответ
    document.getElementById('answer').innerText = answer;
    document.getElementById('stat1').innerText = "да: " + answerYes;
    document.getElementById('stat2').innerText = "нет: " + answerNo;
    document.getElementById('stat3').innerText = "1 : " + stat;
    console.log(answer);
  }
