"use strict";

let listeHeros = [];  // Tableau vide au départ

// Fonction pour remplir le tableau avec des noms via prompt
function remplirTableau() {
    let continuer = true;

    while (continuer) {
        let nom = prompt("Entrez le nom de l'étudiant (ou cliquez sur Annuler pour terminer) :");
        if (nom === null || nom.trim() === "") {
            // Arrêter la boucle si l'utilisateur annule ou entre une chaîne vide
            continuer = false;
        } else {
            listeHeros.push(nom.trim());
        }
    }
}

// Fonction pour afficher la liste dans un tableau HTML
function afficherTableauHTML() {
    // Trier la liste par ordre alphabétique
    listeHeros.sort();

    let res = "<h1>Liste des Héros étudiants</h1>";
    res += "<table border='1' style='border-collapse: collapse;'>";
    res += "<tr><th>Numéro</th><th>Nom de l'étudiant</th></tr>";

    for (let i = 0; i < listeHeros.length; i++) {
        res += "<tr><td>" + (i + 1) + "</td><td>" + listeHeros[i] + "</td></tr>";
    }

    res += "</table>";
    return res;
}

// Remplissage du tableau
remplirTableau();

// Affichage dans la page HTML
document.write(afficherTableauHTML());
