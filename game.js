// Generate a random number between 1 and 100
const randomNumber = Math.floor(Math.random() * 100) + 1;
let attempts = 0;

function checkGuess() {
    const guess = document.getElementById('guess').value;
    const resultDiv = document.getElementById('result');
    
    attempts++;
    
    if (guess == randomNumber) {
        resultDiv.innerHTML = `<p>Congratulations! You guessed it right in ${attempts} tries.</p>`;
        resultDiv.style.color = 'green';
    } else if (guess < randomNumber) {
        resultDiv.innerHTML = '<p>Your guess is too low.</p>';
        resultDiv.style.color = 'orange';
    } else {
        resultDiv.innerHTML = '<p>Your guess is too high.</p>';
        resultDiv.style.color = 'red';
    }
}
