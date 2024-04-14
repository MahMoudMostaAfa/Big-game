'use strict';
//selecting elements
const player0El = document.querySelector('.player--0');
const player1El = document.querySelector('.player--1');
const score0El = document.querySelector('#score--0');
const score1El = document.querySelector('#score--1');
const diceEl = document.querySelector('.dice');
const btnNew = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');
const switchplayer = function () {
  currentScore = 0;
  document.querySelector(`#current--${activePlayer}`).textContent =
    currentScore;
  activePlayer = activePlayer === 1 ? 0 : 1;
  player0El.classList.toggle('player--active');
  player1El.classList.toggle('player--active');
};
//const currentscore0El = document.querySelector('#current--0');
//const currentscore1El = C;
let scores = [0, 0];
let currentScore = 0;
let activePlayer = 0;
let gameState = true;
// initial condition
//diceEl.classList.add('hidden');
//score0El.textContent = 0;
//score1El.textContent = 0;
const init = function () {
  gameState = true;
  document
    .querySelector(`.player--${activePlayer}`)
    .classList.remove('player--winner');
  score0El.textContent = 0;
  score1El.textContent = 0;
  for (let i = 0; i < 1; i++) {
    scores[i] = 0;
    document.querySelector(`#current--${i}`).textContent = 0;
  }
  diceEl.classList.add('hidden');
  activePlayer = 0;
  player0El.classList.remove('player--active');
  player1El.classList.remove('player--active');
  player0El.classList.add('player--active');
};
init();
// roll function
btnRoll.addEventListener('click', function () {
  // generate number
  if (gameState) {
    const dice = Math.trunc(Math.random() * 6) + 1;
    diceEl.classList.remove('hidden');
    diceEl.src = `dice-${dice}.png`;
    if (dice !== 1) {
      currentScore += dice;
      document.querySelector(`#current--${activePlayer}`).textContent =
        currentScore;

      // display the dice
    } else {
      switchplayer();
    }
  }
});
btnHold.addEventListener('click', function () {
  if (gameState) {
    console.log('yes');
    scores[activePlayer] += currentScore;
    console.log(scores[activePlayer]);
    document.querySelector(`#score--${activePlayer}`).textContent =
      scores[activePlayer];
    if (scores[activePlayer] >= 20) {
      gameState = false;
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.add('player--winner');
      diceEl.classList.add('hidden');
    } else {
      switchplayer();
      //switch player
    }
  }
});
btnNew.addEventListener('click', init);
