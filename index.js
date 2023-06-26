//problem: how to random the src, how to know if the player wins via random images.

const result = document.querySelector(".player");
function diceeGame() {
  const img = [
    "images/dice1.png",
    "images/dice2.png",
    "images/dice3.png",
    "images/dice4.png",
    "images/dice5.png",
    "images/dice6.png",
  ];
  const random1 = Math.floor(Math.random() * 5) + 1;
  const random2 = Math.floor(Math.random() * 5) + 1;
  const dice = document.getElementsByTagName("img");
  const firstPlayer = dice[0].setAttribute("src", img[random1]);
  const secondPlayer = dice[1].setAttribute("src", img[random2]);

  console.log(random1, random2);

  if (random1 === random2) {
    result.textContent = "draw!";
  } else if (random1 > random2) {
    result.textContent = "First Player Wins!";
  } else {
    result.textContent = "Second Player Wins!";
  }
}
diceeGame();
