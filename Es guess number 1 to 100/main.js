var bomb_Number = []; //creo array per i numeri generati dal pc;
//Riempio l'array con numeri casuali da 1 a 100;
for (var i = 0; i < 16; i++) {
  bomb_Number.push(Math.floor(Math.random() * 100) + 1);
}
console.log(bomb_Number);
//Creo un ciclo per far sì che l'utente possa indovinare i numeri;
number_found = false; //variabile che indica se l'utente "becca" un numero vietato;
count_attempts = 0; //Conto i tentativi fatti dall'utente;
//Faccio scegliere la difficoltà all'utente;
do {
  var number_guess = prompt("Inserisci un numero da 1 a 100:"); //Numero inserito dall'utente;
  var i = 0;
  do{
    if(number_guess == bomb_Number[i]){
        number_found = true;
    }
    i++;
  }while(number_found == false);
  count_attempts++;
} while(number_found == false);

document.write("Hai fatto: " + count_attempts + " tentativi");
