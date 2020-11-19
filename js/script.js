// Il computer deve generare 16 numeri casuali tra 1 e 100.
// I numeri non possono essere duplicati.
// In seguito deve chiedere all’utente (100 - 16) volte di inserire un numero alla volta, sempre compreso tra 1 e 100.
// L’utente non può inserire più volte lo stesso numero.
// Se il numero è presente nella lista dei numeri generati, la partita termina, altrimenti si continua chiedendo all’utente un altro numero.
// La partita termina quando il giocatore inserisce un numero “vietato” o raggiunge il numero massimo possibile di numeri consentiti.
// Al termine della partita il software deve comunicare il punteggio, cioè il numero di volte che l’utente ha inserito un numero consentito.


// Il computer deve generare 16 numeri casuali tra 1 e 100.

var arrayBombe = [];

for (var i = 0; i < 16; i++) {
  arrayBombe.push(numeriRandom(1, 100));

}
console.log(arrayBombe);


// In seguito deve chiedere all’utente (100 - 16) volte di inserire un numero alla volta, sempre compreso tra 1 e 100.

var arrayNumeriUtente = [];

for (var i = 0; i < 4; i++) {
  var mossaUtente = parseInt(prompt("Inserisci un numero da 1 a 100"))
  arrayNumeriUtente.push(mossaUtente);

}

console.log(arrayNumeriUtente);





// funzioni -----------------------------------------

function controlloArray (array, number) {
  var result = false;
  for (var i = 0; i < array.length; i++) {
    if (number == array[i]) {
      return result = true;
    }
  }
  return result;
}

function numeriRandom (min, max) {
  return Math.floor(Math.random() * (max - min +1) + min);
}
