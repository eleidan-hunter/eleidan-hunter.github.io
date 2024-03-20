// Игра "Числа"
let number;
let savedNumber;
let message = document.getElementById("message");
let field = document.querySelector(".game-field");
let cell = document.querySelector(".game-field__cell");
let fontColors = ["red", "orange", "brown", "green", "lightblue", "blue", "violet"];
let fontSizes = ["50", "55", "60", "65", "70", "75", "80"];

function saveNumber() {
    number = document.getElementById("numberInput").value;
    // field.innerHTML = "";
    if (!isNaN(number)) {
        savedNumber = parseFloat(number);
        console.log("Число сохранено: " + savedNumber);
    } else {
        alert("Пожалуйста, введите корректное число.");
    }
    if (savedNumber >= 4){
        let rightNumText = "Поле создано. Удачной игры!"
        message.textContent = rightNumText;
        generateField(savedNumber);
    } else {
        let wrongNumText = "Введите правильный размер поля!"
        message.textContent = wrongNumText;
    }
}
function generateField(savedNumber){
    let widthField = savedNumber;
    let fieldSize = widthField * widthField;
    field.innerHTML = ""; // Очищаем содержимое поля перед добавлением новых блоков
    let cellNumbers = [];
    // генерация случайных номеров в ячейках
    for (let i = 1; i <= fieldSize; i++) {
        cellNumbers.push(i);
    }
    for (let i = cellNumbers.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [cellNumbers[i], cellNumbers[j]] = [cellNumbers[j], cellNumbers[i]];
    }

    // создание ячеек
    for (let i = 0; i < fieldSize; i++) {
        let block = document.createElement("div"); // Создаем новый блок div
        block.classList.add("game-field__cell"); // Добавляем класс для стилизации
        block.innerHTML = "<p>" + cellNumbers[i] + "</p>"; // Добавляем текст в блок div
        block.style.color = fontColors[Math.floor(Math.random() * fontColors.length)]; // Выбираем случайный цвет текста из массива fontColors
        block.style.fontSize = fontSizes[Math.floor(Math.random() * fontSizes.length)] + "px"; // Выбираем случайный цвет текста из массива fontColors
        field.appendChild(block); // Добавляем блок в поле игры
    }
    field.style.cssText = "border: 1px solid #000; " +
                      "grid-template-columns: repeat(" + widthField + ", 1fr); " +
                      "grid-template-rows: repeat(" + widthField + ", 1fr);" +
                      "visibility: visible;" ;
}
