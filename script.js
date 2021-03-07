const buttonAd = document.querySelector(".button-add");
const buttonRemove = document.querySelector(".button-delete");
const input = document.querySelector(".userInput");
const ul = document.querySelector(".list");
const buttonVolume = document.querySelector(".sound");
let sounds = true;


function muteMe(elem) {
    sounds === true ? sounds = false : sounds = true;
}

// Check length of input field
function addItemLength() {
    return input.value.length;
}

// Check how many li elements exist
function checkLis() {
    return document.getElementsByTagName('li').length;
}

//create new list item
function createListItem() {
     // Create li element, style it and append it to ul
    const li = document.createElement("li");
    li.appendChild(document.createTextNode(input.value));
    ul.appendChild(li);
    // toggle between class when clicked
    li.addEventListener('click', toggleDone);
    // erase textbox content
    input.value = "";
    // create delete button, style it, append to li
    const delButton = document.createElement('button');
    // create icon from fontawesome
    const delX = document.createElement('i');
    delX.classList.add('fa','fa-times','fa-2x');
    delButton.classList.add('custButton');
    delButton.appendChild(delX);
    delButton.addEventListener('click', delItem);
    li.append(delButton);
    // Toggle line-through on click
    function toggleDone() {
        li.classList.toggle('done');
        playSound();
    }
    function playSound() {
        if(sounds) {
            var sound = new Audio("line.mp3");
            sound.play();
        }
    }
    // Delete item
    function delItem() {
        li.remove();
    }
}

    // On click
function addClick() {
    if(addItemLength() > 0) {
      createListItem();
    }
  }

  // On keypress enter
function addKey(event) {
    if(addItemLength() > 0 && event.keyCode == 13) {
      createListItem();
    }
}

    // on click reset
function reset() {
    ul.innerHTML = "";
}

buttonVolume.addEventListener("click", muteMe);
buttonAd.addEventListener("click", addClick);
input.addEventListener("keypress", addKey);
buttonRemove.addEventListener("click", reset);