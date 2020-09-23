let userInput = document.querySelector("input");
let result = document.querySelector('.result');
let myButton = document.querySelector('.button');

function addTextByClick() {
    if (userInput.value.length > 3) {
            result.classList.add('green');
        } 
    if (/[!@#$&*%]/.test(userInput.value)) {
            result.classList.add('red');
        }
    return result.textContent = userInput.value,
    userInput.value = "";
    }

function addTextByEnter(event) {     
        if (event.keyCode == 13) {
            addTextByClick();           
        }
    }
myButton.addEventListener('click', addTextByClick);
userInput.addEventListener('keydown', addTextByEnter);
