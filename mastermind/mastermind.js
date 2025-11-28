"use strict";

// ------------------------------------------------------
// Jeu du Mastermind 4 chiffres
// ANTOINE PRIAM SIO 1 GROUPE 2 
// CA MERITE UN 2 / 20 DEJA JUSTE POUR CA 
// ------------------------------------------------------

// combinaisonSecrete 	: tableau de 4 chiffres différents entre 0 et 9
// essaiCourant      	: numéro de l'essai en cours (de 0 à essaiMax)
// essaiMax          	: nombre maximal d'essais (10)
// partieTerminee    	: booléen qui indique la fin de la partie

let combinaisonSecrete = [];
let essaiCourant = 0;
let essaiMax = 10;
let partieTerminee = false;

// Références vers les éléments du DOM (remplies à l'initialisation)
let champProposition = null;
let spanEssaiCourant = null;
let spanEssaiMax = null;
let zoneMessage = null;
let corpsHistorique = null;



// ------------------------------------------------------
// 1. Fonction de tirage aléatoire
//    Retourne un nombre entier entre min et max inclus
// ------------------------------------------------------
function tirageNombre(min, max) {
	var a = Math.floor(min + Math.random() * max);   
    a = String(a);
    a = a.substring(0,9);
	return a;
}

console.log(tirageNombre(0,9));

// ------------------------------------------------------
// 2. Génération de la combinaison secrète
//    - vider le tableau combinaisonSecrete[]
//    - tirer des chiffres aléatoires entre 0 et 9
//    - vérifier qu'ils ne sont pas déjà présents (indexOf)
//    - chercher les chiffres jusqu'à avoir 4 valeurs distinctes
// ------------------------------------------------------
function genererCombinaisonSecrete() {
	combinaisonSecrete = [];

	oneNb = tirageNombre(0,9);
	combinaisonSecrete.push(oneNb);

	twoNb = tirageNombre(0,9);
	combinaisonSecrete.push(twoNb);
	
	threeNb = tirageNombre(0,9);
	combinaisonSecrete.push(threeNb);

	fourNb = tirageNombre(0,9);
	combinaisonSecrete.push(fourNb);

	return combinaisonSecrete;

}
console.log(combinaisonSecrete);



// ------------------------------------------------------
// 3. Affichage des messages
//    - afficher un texte dans #message
//    - ajouter une classe CSS en fonction du type de message
//      (message-bon, message-mauvais ou aucune)
// ------------------------------------------------------
function afficherMessage(texte, estBon) {
	
	
}



// ------------------------------------------------------
// 4. Ajout d'une ligne à l'historique
//    - créer une ligne <tr>
//    - 4 cellules : numéro d'essai, proposition, bien placés, mal placés
//    - ajouter la ligne dans le <tbody id="historique">
// ------------------------------------------------------
function ajouterHistorique(propositionTexte, nbBienPlaces, nbMalPlaces) {
	// A completer
	
}



// ------------------------------------------------------
// 5. Vérification d'une proposition
//    - lire la saisie dans #champProposition
//    - contrôler qu'il y a exactement 4 chiffres
//    - transformer la proposition en tableau de nombres
//    - calculer :
//        * nbBienPlaces  : même chiffre, même position
//        * nbMalPlaces   : chiffre présent mais à une autre position
//    - incrémenter essaiCourant et mettre à jour l'affichage
//    - appeler ajouterHistorique(...)
//    - tester fin de partie :
//        * si nbBienPlaces == 4 : victoire
//        * sinon si essaiCourant >= essaiMax : défaite + dévoiler la combinaison
//        * sinon : afficher un message d'indice
// ------------------------------------------------------
function verifierProposition() {
	const essai = document.getElementById("champProposition");
	
	if (essai.value.length == 4) {
		console.log("On peux continuer");
	} else {
		afficherMessage("La proposition doit contenir exactement 4 chiffres.");
	}
};



// ------------------------------------------------------
// 6. Nouvelle partie
//    - réinitialiser essaiCourant et partieTerminee
//    - vider l'historique
//    - effacer le message et le champ de saisie
//    - générer une nouvelle combinaison secrète
// ------------------------------------------------------
function nouvellePartie() {
	// A completer
	
}



// ------------------------------------------------------
// 7. Mise en place des événements au chargement de la page
//    - récupérer toutes les références (querySelector)
//    - afficher essaiMax dans #essaiMax
//    - relier :
//        * #btnProposer      -> verifierProposition
//        * #btnNouvellePartie-> nouvellePartie
//    - valider avec [Entrée] dans #champProposition
//    - lancer la première partie avec nouvellePartie()
// ------------------------------------------------------
document.addEventListener("DOMContentLoaded", function () {

	// A completer : récupération des éléments du DOM


	// Affichage du nombre d'essais maximum


	// A completer : installation des gestionnaires d'événements


	// A completer : valider avec la touche Entrée dans le champ de saisie


	// Lancer la première partie
	nouvellePartie();
});
