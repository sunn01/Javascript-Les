const diceImages = ['dice1.png', 'dice2.png', 'dice3.png', 'dice4.png', 'dice5.png', 'dice6.png'];
const playerDice1Element = document.getElementById('playerDice1');
const playerDice2Element = document.getElementById('playerDice2');
const computerDice1Element = document.getElementById('computerDice1');
const computerDice2Element = document.getElementById('computerDice2');
const higherButton = document.getElementById('higher');
const lowerButton = document.getElementById('lower');
const messageElement = document.getElementById('message');

function rollDice() {
    return Math.floor(Math.random() * 6);
}

function updateDiceImages() {
    const playerRoll1 = rollDice();
    const playerRoll2 = rollDice();
    const computerRoll1 = rollDice();
    const computerRoll2 = rollDice();

    playerDice1Element.src = diceImages[playerRoll1];
    playerDice2Element.src = diceImages[playerRoll2];
    computerDice1Element.src = diceImages[computerRoll1];
    computerDice2Element.src = diceImages[computerRoll2];

    return playerRoll1 + playerRoll2 + 2; // 2 is added to make the range 2-12 instead of 0-10
}

function showMessage(message) {
    messageElement.textContent = message;
}

higherButton.addEventListener('click', () => {
    const result = updateDiceImages();
    if (result > 7) {
        showMessage('Correct! Het was hoger.');
    } else if (result === 7) {
        showMessage('Gelijkspel!');
    } else {
        showMessage('Sorry, het was lager.');
    }
});

lowerButton.addEventListener('click', () => {
    const result = updateDiceImages();
    if (result < 7) {
        showMessage('Correct! Het was lager.');
    } else if (result === 7) {
        showMessage('Gelijkspel!');
    } else {
        showMessage('Sorry, het was hoger.');
    }
});
