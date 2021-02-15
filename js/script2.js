// Il computer deve generare 16 numeri casuali tra 1 e 100.
// utilizzo un ciclo while per generare il numero delle bombe e controllare che non si ripetano
// I numeri non possono essere duplicati.
// In seguito deve chiedere all’utente (100 - 16) volte di inserire un numero alla volta, sempre compreso tra 1 e 100.
// L’utente non può inserire più volte lo stesso numero.
// Se il numero è presente nella lista dei numeri generati, la partita termina, altrimenti si continua chiedendo all’utente un altro numero.
// La partita termina quando il giocatore inserisce un numero “vietato” o raggiunge il numero massimo possibile di numeri consentiti.
// Al termine della partita il software deve comunicare il punteggio, cioè il numero di volte che l’utente ha inserito un numero consentito.



// Il computer deve generare 16 numeri casuali tra 1 e 100.


var arrayBombe = [];
var tentativi = [];
var tentativiMassimi = 4;
var punteggio = 0;




var i = 0;
while (arrayBombe.length < 16) {
  var bomba = randomBomb(1, 100);
  console.log("iterazione numero", arrayBombe.length, "=", bomba);
  var controllo = controlloArray(arrayBombe, bomba);
  if (controllo == true) {
    i++;
  } else {
  arrayBombe.push(bomba);
}
}

var haiPerso = false;
while (tentativi.length < tentativiMassimi && haiPerso == false ) {

  var numeroUtente = parseInt(prompt("inserisci numero da 1 a 100"));
  var controlloNumeroRipetuto = controlloArray(tentativi, numeroUtente);
  var controlloNumeroBombe = controlloArray(arrayBombe, numeroUtente);

    if (controlloNumeroBombe == true) {
      haiPerso = true;
      console.log("hai perso");
      console.log("il tuo punteggio è" + punteggio);
    } else if (controlloNumeroRipetuto == true) {
      console.log("numero gia inserito");
      numeroUtente;
    } else {
      tentativi.push(numeroUtente);
      punteggio++;

    }
}

if (tentativi.length == tentativiMassimi && haiPerso == false) {
    alert("Hai vinto");
    alert("il tuo punteggio è " + punteggio);
}




function randomBomb(min, max) {
  return  Math.floor(Math.random() * (max - min + 1) + min);
}

function controlloArray (array, elemento) {
  var found = false;
  for (var i = 0; i < array.length; i++) {
    if (elemento == array[i]) {
      found = true;
    }
    return found;
  }
}
