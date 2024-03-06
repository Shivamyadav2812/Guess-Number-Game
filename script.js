const secretNumber = Math.floor(Math.random() * 100) + 1;
let attempts = 0;

function checkGuess() {
    const guess = parseInt(document.getElementById('guessInput').value);
    const message = document.getElementById('message');
    const attemptsDisplay = document.getElementById('attempts');

    if (isNaN(guess) || guess < 1 || guess > 100) {
        message.textContent = 'Please enter a valid number between 1 and 100.';
    } else {
        attempts++;
        if (guess === secretNumber) {
            message.textContent = `Congratulations! You guessed the number ${secretNumber} correctly in ${attempts} attempts!`;
            attemptsDisplay.textContent = '';
        } else if (guess < secretNumber) {
            message.textContent = 'Too low! Try again.';
            attemptsDisplay.textContent = `Attempts: ${attempts}`;
        } else {
            message.textContent = 'Too high! Try again.';
            attemptsDisplay.textContent = `Attempts: ${attempts}`;
        }
    }
}
