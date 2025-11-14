"use strict";

// ------------------------------------------------------
// Jeu du Plus / Moins
// Fait par Priam ANTOINE SIO 1
// ------------------------------------------------------

let numeroGagnant = 0;
let essais = [];

// ------------------------------------------------------
// 1. Fonction de tirage aléatoire (vue en cours)
//    Retourne un nombre entier entre min et max inclus
// ------------------------------------------------------
function tirageNombre(min, max) {
    return Math.floor(Math.random() * (max-min+1)) + min;
}

// ------------------------------------------------------
// 2. Initialisation du jeu
//    - tirage du nombre secret
//    - remise à zéro des essais
//    - remise à zéro des affichages
// ------------------------------------------------------
function demarrerJeu() {
    console.log("jeux lancé")

	numeroGagnant = tirageNombre(1, 50);
    essais = [];

    const input = document.querySelector('#proposition');
    const indice = document.querySelector('#indice');
    const historique = document.querySelector('#histoirque');

    if (input) { 
        input.value = "";
    }
    if (indice) { 
        indice.innerHTML = "";
    }
    if(historique) { 
        historique.innerHTML = "";
    }
}

// ------------------------------------------------------
// 3. Affichage de l’historique des essais
//    - construire une chaîne HTML avec tous les essais
//    - utiliser une boucle for et le tableau essais[]
// ------------------------------------------------------
function afficherHistorique() {
	const historique = document.querySelector('#histoirque');
		
    for(let i = 0; i < essais.length; i++){
        html = "<li> Essaie " + (i + 1) + " : " + essais[i] + "</li>"
    }

    historique.innerHTML = html
}

// ------------------------------------------------------
// 4. Fonction appelée quand l’utilisateur clique sur “Tester”
//    - lit la valeur saisie
//    - la convertit en nombre
//    - la stocke dans le tableau essais[]
//    - compare avec le secret
//    - affiche l’indice ("plus", "moins", "bravo")
// ------------------------------------------------------
function tester() {
	const input = document.querySelector('#proposition');
    const valeur = parseInt(input.value);

    essais.push(valeur);
    if(valeur < numeroGagnant){
        indice.textContent = "C'est plus ! "
    } else if (valeur > numeroGagnant) {
        indice.textContent = "C'est moins ! "
    } else {
        indice.textContent = "Gagner ! Tu à trouver en " + essais.length + " essais !";
    }

    afficherHistorique();

    // Bonus confort : remettre le focus dans le champ

}

// ------------------------------------------------------
// 5. Mise en place des événements au chargement de la page
// ------------------------------------------------------
document.addEventListener("DOMContentLoaded", function () {
    // relier le bouton #btnTester à la fonction tester
    document.querySelector("#btnTester").addEventListener("click", tester);

    // relier le bouton #btnRejouer à la fonction demarrerJeu
    document.querySelector("#btnRejouer").addEventListener("click", function() {
        demarrerJeu()
        console.log('reset')
    });

    // (facultatif) : valider avec la touche Entrée
    document.querySelector("#proposition").addEventListener("keydown", function (event) {
		if(event.key == "Enter"){
            tester()
        }
    });

    // appeler demarrerJeu() pour lancer la première partie
    demarrerJeu();
});
