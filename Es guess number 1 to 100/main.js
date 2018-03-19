//Faccio scegliere la difficoltà all'utente;
var difficulty = prompt("Scegli la difficoltà: 0 - da 1 a 100,  1 - da 1 a 80,  2 - da 1 a 50");
var bomb_Number = []; //creo array per i numeri generati dal pc;
//Riempio l'array con numeri casuali da 1 a 100 o 80 o 50 in base alla difficoltà;
switch(difficulty){
  case 0:
    for (var i = 0; i < 16; i++) {
      bomb_Number.push(Math.floor(Math.random() * 100) + 1);
    }
    break;
  case 1:
    for (var i = 0; i < 16; i++) {
      bomb_Number.push(Math.floor(Math.random() * 80) + 1);
    }
    break;
  default:
    for (var i = 0; i < 16; i++) {
      bomb_Number.push(Math.floor(Math.random() * 50) + 1);
    }
    break;
}
console.log(bomb_Number);
//Creo un ciclo per far sì che l'utente possa indovinare i numeri;
number_found = false; //variabile che indica se l'utente "becca" un numero vietato;
count_attempts = 0; //Conto i tentativi fatti dall'utente;
used_numbers = []; //Creo un array affinché l'utente non riusi un numero.
do {
  if(difficulty == 0){
    var number_guess = prompt("Inserisci un numero da 1 a 100:"); //Numero inserito dall'utente;
    number_guess = parseInt(number_guess); //trasformo in int il prompt sennò includes non funziona;
  }
  else if(difficulty == 1){
    var number_guess = prompt("Inserisci un numero da 1 a 80");
    number_guess = parseInt(number_guess);
  }
  else{
    var number_guess = prompt("Inserisci un numero da  1 a 50");
    number_guess = parseInt(number_guess);
  }
  //Controllo che il numero non sia già stato inserito;
  if(used_numbers.includes(number_guess)){
    number_guess = prompt("Inserisci un nuovo numero, il precedente risulta già utilizzato");
    number_guess = parseInt(number_guess);
  }
  else{
    used_numbers.push(number_guess);
  }
  //controllo se il numero è tra i numeri vietati
  if(bomb_Number.includes(number_guess)){
    number_found = true;
  }
  count_attempts++;
} while(number_found == false);

document.write("Numero tentativi : " + count_attempts);
