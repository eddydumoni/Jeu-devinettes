let randomNumber = Math.floor(Math.random() * 100) + 1;
let attempts = 0;
const maxAttempts = 10;

function checkGuess() {
    let userGuess = parseInt(document.getElementById('guess').value);
    let message = document.getElementById('message');
    attempts++;

    if (isNaN(userGuess) || userGuess < 1 || userGuess > 100) {
        message.textContent = "Veuillez entrer un nombre valide entre 1 et 100.";
        return;
    }

    if (userGuess === randomNumber) {
        message.textContent = `Bravo ! Vous avez trouvé le nombre en ${attempts} essais.`;
    } else if (userGuess < randomNumber) {
        message.textContent = "Trop petit ! Essayez encore.";
    } else {
        message.textContent = "Trop grand ! Essayez encore.";
    }

    if (attempts >= maxAttempts && userGuess !== randomNumber) {
        message.textContent = `Désolé, vous avez atteint ${maxAttempts} essais. Le nombre était ${randomNumber}.`;
    }
}