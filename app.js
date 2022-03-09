// import functions and grab DOM elements
const btnOne = document.getElementById('cupOneBtn');
const btnTwo = document.getElementById('cupTwoBtn');
const btnThree = document.getElementById('cupThreeBtn');

const resetBtn = document.getElementById('resetButton');

const cupOne = document.getElementById('cup-one');
const cupTwo = document.getElementById('cup-two');
const cupThree = document.getElementById('cup-three');

const correctEl = document.getElementById('correct');
const incorrectEl = document.getElementById('incorrect');
const totalEl = document.getElementById('total');

const cups = [
    0, 1, 2
];
// let state
let correct = 0;
let total = 0;

function resetCups() {
    cupOne.src = './assets/cupgame1.png';
    cupTwo.src = './assets/cupgame1.png';
    cupThree.src = './assets/cupgame1.png';
}

function statusDisplay() {
    correctEl.textContent = correct;
    totalEl.textContent = total;
    incorrectEl.textContent = total - correct;
}
function resetStatus() {
    correct = '0';
    total = '0';
    //console.log(resetBtn);

}

function getRandomCup(arr) {

    const index = Math.floor(Math.random() * cups.length);
    
    return arr[index];
}

function handleGuess(correctSpot, userGuess) {
    resetCups();
    total++;

    if (correctSpot === userGuess) {
        correct++;
    }

    if (correctSpot === 0) {
        cupOne.src = '/assets/cupgame2.png';
    } else if (correctSpot === 1) {
        cupTwo.src = '/assets/cupgame2.png';
    } else {
        cupThree.src = '/assets/cupgame2.png';
    }

    statusDisplay();
}
// set event listeners 

btnOne.addEventListener('click', () => {
   
    const correctSpot = getRandomCup(cups);

    handleGuess(correctSpot, 0);
});

btnTwo.addEventListener('click', () => {
    
    const correctSpot = getRandomCup(cups);

    handleGuess(correctSpot, 1);
});

btnThree.addEventListener('click', () => {
   
    const correctSpot = getRandomCup(cups);

    handleGuess(correctSpot, 2);
});

resetBtn.addEventListener('click', () =>{
    resetStatus();

});
  // get user input
  // use user input to update state 
  // update DOM to reflect the new state
