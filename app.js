// import functions and grab DOM elements
const buttonOne = document.getElementById('cupOneBtn');
const buttonTwo = document.getElementById('cupTwoBtn');
const buttonThree = document.getElementById('cupThreeBtn');

const cupOne = document.getElementById('cup-one');
const cupTwo = document.getElementById('cup-two');
const cupThree = document.getElementById('cup-three');

const correctEl = document.getElementById('correct');
const incorrectEl = document.getElementById('incorrect');
const totalEl = document.getElementById('total');
// let state
let correct = 0;
let total = 0;

function resetCups() {
  cupOne.src = './assets/cupgame1.png';
  cupTwo.src = './assets/cupgame1.png';
  cupThree.src = './assets/cupgame1.png';
}
// set event listeners 










  // get user input
  // use user input to update state 
  // update DOM to reflect the new state
