//Chiediamo agli utenti i km da percorrere e la loro età//
let kmTot = parseFloat(prompt("Numero km che vuoi percorrere"));
let age = parseInt(prompt("Inserisci la tua età"));

//Prezzo del biglietto
let prezzo = (kmTot*0.21);

if(age<18){
    prezzo = (prezzo*0.8);
}

else if(age>=65){
    prezzo = (prezzo*0.6);
}

else{
    prezzo=prezzo;
}

let prezzoFinale = prezzo.toFixed(2);

console.log("il prezzo è: " + prezzo);
document.getElementById("Prezzo-Biglietto").innerHTML = "Il prezzo del tuo biglietto: " + prezzoFinale+"€";