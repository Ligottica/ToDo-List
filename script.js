const buttonAd = document.querySelector(".button-add");
const buttonRemove = document.querySelector(".button-delete");
const input = document.querySelector(".userInput");
const ul = document.querySelector(".list");

function inputLength() {
    return input.value.length;
}

function createListElement() {
    const li = document.createElement("li");
    // crear un list item
    li.appendChild(document.createTextNode(input.value));
    // ponerle texto
    ul.appendChild(li);
    // adjuntarlo a la lista
    input.value = "";
    // para que se borre el contenido del textbox
}

function addListAfterClick() {
    playSound('https://www.pacdv.com/sounds/applause-sounds/app-5.mp3');
    if(inputLength() > 0) {   
        createListElement();
    }
}

function addListAfterKeypress(event) {
    if(inputLength() > 0 && event.key === "Enter") {   
            createListElement();
    }
}

function removeList() {
    ul.innerHTML = '';
}

function crossOut() {

}

buttonAd.addEventListener("click", addListAfterClick);
buttonRemove.addEventListener("click", removeList);
input.addEventListener("keypress", addListAfterKeypress);

// Clicar en el list item y tachar el texto

var yourNumber = "{{ your number in string}}"
var yourMessage = "{{ your message in string }}"

// %20 mean space in link
// If you already had an array then you just join them with '%20'
// easy right
