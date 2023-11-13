//Chiediamo agli utenti i km da percorrere e la loro età
let kmTot = parseFloat(prompt("Numero km che vuoi percorrere"));
let age = parseInt(prompt("Inserisci la tua età"));

//Prezzo del biglietto a seconda dei km che l'utente vuole percorrere
let prezzo = (kmTot*0.21);
//Se l'utente ha meno di 18 anni allora il prezzo del suo biglietto sarà
if(age<18){
    prezzo = (prezzo*0.8);
}

//Altrimenti se l'utente ha 65 o più anni allora il prezzo del suo biglietto sarà
else if(age>=65){
    prezzo = (prezzo*0.6);
}

//Il prezzo non avrà alcuno sconto perchè la tua età è compresa tra i 18 e i 65 anni
else{
    prezzo=prezzo;
}

//Adesso dobbiamo ottenere solo 2 cifre dopo la virgola
let prezzoFinale = prezzo.toFixed(2);

console.log("il prezzo del tuo biglietto è di: " + prezzoFinale + "€");

document.getElementById("Prezzo-Biglietto").innerHTML = "Il prezzo del tuo biglietto: " + prezzoFinale+"€";