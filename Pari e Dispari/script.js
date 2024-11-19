/**
 * Salvo in due variabili le scelte dell'utente

 * Creo una funzione in grado di generare un numero random da 1 a 5

 * Creo una funzione in grado di stabilire se un numero è pari o dispari

 * Salvo in una variabile la scelta random del pc, richiamando la funzione capace di generarlo

 * Sommo le due scelte

 * Verifico che la somma sia pari o dispari, con la relativa funzione

 * Se la scelta dell'utente coincide con l'esito della funzione, lo dichiaro vincitore 
 */

let pariDispari="";

let numeroUtente=0;

let message;

while (pariDispari !== "pari" && pariDispari !== "dispari") {
  pariDispari = prompt("Inserisci la tua scelta. Pari o dispari?").toLowerCase();
}

while (isNaN(numeroUtente) || (numeroUtente<1 || numeroUtente>5)){
  numeroUtente = parseInt(prompt("Inserisci un numero da 1 a 5"));
}

const numeroPc = randomNumber();

const somma = numeroUtente + numeroPc;

sommaIsPari = isPari(somma);

console.log(`La tua scelta è ${pariDispari}, e il numero che hai scelto è ${numeroUtente}. 
  Il computer ha scelto ${numeroPc}
  La loro somma è ${somma}`);

if(pariDispari === "pari"){

  if(isPari(somma)){
    message = "hai vinto!"
  } else {
    message = "hai perso!"
  }

} else {
  if(!isPari(somma)){
    message = "hai vinto!"
  } else {
    message = "hai perso!"
  }
}

console.log(message);


function randomNumber(){
  return Math.floor(Math.random() * 5) + 1;
}

function isPari(num){
  if( !(num % 2) ){
    return true;
  } else {
    return false;
  }
}