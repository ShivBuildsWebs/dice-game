let $ = document.querySelector.bind(document);
let $$ = document.querySelectorAll.bind(document);

let heading = $("#heading");
let dice1 = $("#player1");
let dice2 = $("#player2");

function updateDice(dice, value) {
    let dots = dice.querySelectorAll(".dot");

    for (let i = 0; i < dots.length; i++) {
        dots[i].classList.add("hidden");
    }

    if (value === 1) {
        dice.querySelector(".pos5").classList.remove("hidden");
    } else if (value === 2) {
        dice.querySelector(".pos1").classList.remove("hidden");
        dice.querySelector(".pos9").classList.remove("hidden");
    } else if (value === 3) {
        dice.querySelector(".pos1").classList.remove("hidden");
        dice.querySelector(".pos5").classList.remove("hidden");
        dice.querySelector(".pos9").classList.remove("hidden");
    } else if (value === 4) {
        dice.querySelector(".pos1").classList.remove("hidden");
        dice.querySelector(".pos3").classList.remove("hidden");
        dice.querySelector(".pos7").classList.remove("hidden");
        dice.querySelector(".pos9").classList.remove("hidden");
    } else if (value === 5) {
        dice.querySelector(".pos1").classList.remove("hidden");
        dice.querySelector(".pos3").classList.remove("hidden");
        dice.querySelector(".pos5").classList.remove("hidden");
        dice.querySelector(".pos7").classList.remove("hidden");
        dice.querySelector(".pos9").classList.remove("hidden");
    } else if (value === 6) {
        dice.querySelector(".pos1").classList.remove("hidden");
        dice.querySelector(".pos3").classList.remove("hidden");
        dice.querySelector(".pos4").classList.remove("hidden");
        dice.querySelector(".pos6").classList.remove("hidden");
        dice.querySelector(".pos7").classList.remove("hidden");
        dice.querySelector(".pos9").classList.remove("hidden");
    }
}




heading.addEventListener("click", function () {
    dice1value = Math.floor(Math.random() * 6) + 1;
    dice2value = Math.floor(Math.random() * 6) + 1;

    updateDice(dice1, dice1value);
    updateDice(dice2, dice2value);

    if (dice1value > dice2value) {
        heading.innerText = "Player 1 Wins!";
    } else if (dice1value < dice2value) {
        heading.innerText = "Player 2 Wins!";
    } else {
        heading.innerText = "It's a Draw!";
    }

    if (heading.innerText === "Roll") {
  heading.innerText = "Roll Again";
    }
})

updateDice(dice1, 6);
updateDice(dice2, 6);
