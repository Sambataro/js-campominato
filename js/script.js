// Il computer deve generare 16 numeri casuali tra 1 e 100.
// I numeri non possono essere duplicati.
// In seguito deve chiedere all’utente (100 - 16) volte di inserire un numero alla volta, sempre compreso tra 1 e 100.
// L’utente non può inserire più volte lo stesso numero.
// Se il numero è presente nella lista dei numeri generati, la partita termina, altrimenti si continua chiedendo all’utente un altro numero.
// La partita termina quando il giocatore inserisce un numero “vietato” o raggiunge il numero massimo possibile di numeri consentiti.
// Al termine della partita il software deve comunicare il punteggio, cioè il numero di volte che l’utente ha inserito un numero consentito.


// Il computer deve generare 16 numeri casuali tra 1 e 100.


// variabili--------------------------------------//
var arrayBombe = [];
var tentativiMassimi = 100 - 16;
var tentativi = [];
var punteggio = 0;

// utilizzo un ciclo while per generare il numero delle bombe e controllare che non si ripetano
var i = 0;
while (arrayBombe.length < 16) {
  var numeroBombe = numeriRandom(1, 100);
  console.log("iterazione numero", arrayBombe.length, "=", numeroBombe);
  var controllo = controlloArray(arrayBombe, numeroBombe);
  if (controllo == false) {
    arrayBombe.push(numeroBombe);
  }
}
console.log(arrayBombe);


// gioco-------------------------------------------//
// In seguito deve chiedere all’utente (100 - 16) volte di inserire un numero alla volta, sempre compreso tra 1 e 100.





// funzioni -----------------------------------------//

function controlloArray (array, element) {
  var found = false;

  for (var i = 0; i < array.length; i++) {
    if (element == array[i]) {
      found = true;
    }
  }
  return found;
}


function numeriRandom (min, max) {
  return Math.floor(Math.random() * (max - min +1) + min);
}
