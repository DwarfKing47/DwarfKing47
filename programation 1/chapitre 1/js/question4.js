/* calcule le salarier brut dun em

 */
//etape 1 on identifie les variables
var tauxhoraire;
var nbHeurtravaillees;
var salairbrut;


//etape 2 lire les données
tauxhoraire= prompt("Entrez votre taux horaire");
nbHeuretravaillees= prompt("nb heure travaillées");

//etape 3 on calcule!!
salairbrut = tauxhoraire * nbHeuretravaillees;

//etape 4 on affiche les resultat
alert("vous gagnez:"+ salairbrut);

