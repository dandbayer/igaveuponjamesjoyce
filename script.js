const value1 = document.getElementById('value1');
const value2 = document.getElementById('value2');
const giveUp = document.getElementById('plusgiveup');
const keepTrying = document.getElementById('plustry');

// Give up button

const updateValue1 = () => {
    value1.innerHTML = countGiveUp;
}

let countGiveUp = 0;
let intervalId1 = 0;

giveUp.addEventListener('mousedown', () => {
    intervalId1 = setInterval(() => {
        countGiveUp += 1;
        updateValue1();
    }, 200);
});

document.addEventListener('mouseup', () => clearInterval(intervalId1));

// Keep trying button

const updateValue2 = () => {
    value2.innerHTML = countKeepTrying;
}

let countKeepTrying = 0;
let intervalId2 = 0;

keepTrying.addEventListener('mousedown', () => {
    intervalId2 = setInterval(() => {
        countKeepTrying += 1;
        updateValue2();
    }, 200);
});

document.addEventListener('mouseup', () => clearInterval(intervalId2));

