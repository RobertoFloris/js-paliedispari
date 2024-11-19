/**
 * Salvo in due variabili le scelte dell'utente

 * Creo una funzione in grado di generare un numero random da 1 a 5

 * Creo una funzione in grado di stabilire, dati due parametri numerici, se la loro somma è pari o dispari

 * Salvo in una variabile la scelta random del pc, richiamando la funzione capace di generarlo

 * Richiamo la funzione in grado di stabilire se la loro somma è pari o dispari

 * Se la scelta dell'utente coincide con l'esito della funzione, lo dichiaro vincitore 
 */

const pariDispari = "pari";
// const pariDispari = "dispari"; 
const numeroUtente = 5;
const numeroPc = randomNumber();

console.log(numeroUtente);
console.log(numeroPc);
console.log(numeroPc + numeroUtente);
console.log(isPari(numeroUtente, numeroPc));



function randomNumber(){
  return Math.floor(Math.random() * 5) + 1;
}

function isPari(num1, num2){
  if( !((num1+num2) % 2) ){
    return true;
  } else {
    return false;
  }
}