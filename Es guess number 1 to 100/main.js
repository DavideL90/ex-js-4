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
debugger;
console.log(difficulty);
console.log(bomb_Number);
//Creo un ciclo per far sì che l'utente possa indovinare i numeri;
number_found = false; //variabile che indica se l'utente "becca" un numero vietato;
count_attempts = 0; //Conto i tentativi fatti dall'utente;
used_numbers = []; //Creo un array affinché l'utente non riusi un numero.
do {
  if(difficulty == 0){
    var number_guess = prompt("Inserisci un numero da 1 a 100:"); //Numero inserito dall'utente;
  }
  else if(difficulty == 1){
    var number_guess = prompt("Inserisci un numero da 1 a 80");
  }
  else{
    var number_guess = prompt("Inserisci un numero da  1 a 50");
  }
  console.log(number_guess);
  if(bomb_Number.includes(number_guess)){
    number_found = true;
    console.log(number_found);
  }
  count_attempts++;
} while(number_found == false);

document.write("Numero tentativi : " + count_attempts);
// do{
//   if(number_guess == bomb_Number[i]){
//       number_found = true;
//       console.log(number_found);
//   }
//   i++;
// }while((number_found == false) && (i < bomb_Number.length));
