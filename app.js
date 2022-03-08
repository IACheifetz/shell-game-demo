// import functions and grab DOM elements
const btnOne = document.getElementById('cupOneBtn');
const btnTwo = document.getElementById('cupTwoBtn');
const btnThree = document.getElementById('cupThreeBtn');

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

function statusDisplay() {
    correctEl.textContent = correct;
    totalEl.textContent = total;
    incorrectEl.textContent = total - correct;
}
// set event listeners 

btnOne.addEventListener('click', () => {
    resetCups();
    total++;
    const rdmCupNmb = Math.floor(Math.random() * 3);

    if (rdmCupNmb === 0) {
        cupOne.src = '/assets/cupgame2.png';
        correct++;
    } else if (rdmCupNmb === 1) {
        cupTwo.src = '/assets/cupgame2.png';
    } else {
        cupThree.src = '/assets/cupgame2.png';
    }

    statusDisplay();
});

btnTwo.addEventListener('click', () => {
    resetCups();
    total++;
    const rdmCupNmb = Math.floor(Math.random() * 3);

    if (rdmCupNmb === 0) {
        cupOne.src = '/assets/cupgame2.png';
    } else if (rdmCupNmb === 1) {
        cupTwo.src = '/assets/cupgame2.png';
        correct++;
    } else {
        cupThree.src = '/assets/cupgame2.png';
    }
    
    statusDisplay();
});

btnThree.addEventListener('click', () => {
    resetCups();
    total++;
    const rdmCupNmb = Math.floor(Math.random() * 3);

    if (rdmCupNmb === 0) {
        cupOne.src = '/assets/cupgame2.png';
    } else if (rdmCupNmb === 1) {
        cupTwo.src = '/assets/cupgame2.png';
    } else {
        cupThree.src = '/assets/cupgame2.png';
        correct++;
    }

    statusDisplay();
});
  // get user input
  // use user input to update state 
  // update DOM to reflect the new state
