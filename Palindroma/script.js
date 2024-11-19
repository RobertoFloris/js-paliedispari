/**
 * Chiedo una parola all'utente

 * La parola passerà come parametro stringa alla mia funzione isPalindroma

 * Creo un array composto dalle lettere della parola inserita e le inverto

 * Unisco l'array di lettere in una sola variabile parolaInvertita  

 * Paragono la parola iniziale con parolaInvertita

 * Se sono uguali restituirà true, altrimenti false

 */

const parola = prompt("Inserisci la parola");
let message = "La parola inserita non è polindroma";

if(isPalindroma (parola)){
  message = "La parola inserita è polindroma"
}

console.log(message);

function isPalindroma (word){
  parolaInvertita= word.split("").reverse().join("")
  if (word === parolaInvertita){
    return true;
  } else {
    return false
  }
}

