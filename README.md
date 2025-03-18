# Jeu de Devinettes en JavaScript

Ce projet est un simple jeu de devinettes en HTML, CSS et JavaScript. L'objectif est de deviner un nombre aléatoire compris entre 1 et 100 en un maximum de 10 tentatives.

## 📜 Fonctionnalités

- Génération aléatoire d'un nombre entre 1 et 100.
- Saisie d'un nombre par l'utilisateur via un champ de formulaire.
- Indication si le nombre entré est trop petit ou trop grand.
- Affichage d'un message de victoire ou d'échec après 10 tentatives.

## 📁 Structure du projet

Le projet est composé de deux fichiers principaux :

1. **index.html**  
   - Contient l'interface utilisateur avec un champ de saisie et un bouton.
   - Intègre un script externe (`script.js`).

2. **script.js**  
   - Gère la logique du jeu.
   - Vérifie si la valeur entrée est correcte et fournit un retour.

## 🛠️ Explication du Code

### `index.html`
Le fichier HTML contient :
- Un champ `<input>` pour saisir le nombre.
- Un bouton `<button>` qui appelle la fonction `checkGuess()`.
- Un paragraphe `<p>` pour afficher les messages de retour.

Extrait du code :
```html
<input type="number" id="guess" min="1" max="100">
<button onclick="checkGuess()">Vérifier</button>
<p id="message"></p>
```

### `script.js`
Le script :
1. Génère un nombre aléatoire entre 1 et 100.
2. Vérifie si l'entrée de l'utilisateur est valide.
3. Compare l'entrée avec le nombre à deviner.
4. Affiche les indices "Trop grand" ou "Trop petit".
5. Limite à 10 tentatives avant d'afficher le résultat final.

Extrait du code :
```js
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
```

## 🚀 Comment l'exécuter ?

1. Téléchargez les fichiers `index.html` et `script.js`.
2. Ouvrez `index.html` dans un navigateur web.
3. Entrez un nombre et cliquez sur "Vérifier" pour jouer.

---

**Auteur :** Eddy Dumoni  
📅 Projet créé en Mars 2025.
