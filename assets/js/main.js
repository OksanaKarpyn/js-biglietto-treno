/* Il programma dovrà chiedere all'utente il numero di chilometri che vuole percorrere e l'età del passeggero.
Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio, secondo queste regole:
il prezzo del biglietto è definito in base ai km (0.21 € al km)
va applicato uno sconto del 20% per i minorenni
va applicato uno sconto del 40% per gli over 65.
L'output del prezzo finale va messo fuori in forma umana (con massimo due decimali, per indicare centesimi sul prezzo). Questo richiederà un minimo di ricerca. */

// le var dello sconto
let discount20 = 0.2;
let discount40 = 0.4;
// var output
let out = document.getElementById('out');

function ticket() {
    // chiedo quanti chilometri?
    let km = Math.abs(parseFloat(document.getElementById('chilometri').value));
    // eta?
    let age = Math.abs(parseInt(document.getElementById('eta').value));
    // prezzo aa chilometro
    let kmPrice = 0.21;
    // calcolo dichiaro nuova let  asegno il valore  km * prezzo
    let price = km * kmPrice;

    const minorenni = age < 18;
    const anziani = age > 65;
    if (minorenni) {
        const discoutedPrice = price - (price * discount20);
        // price = price - (price * discount20);
        out.innerHTML = `Anni ${age} ha sconto del 20%. Prezzo è €${discoutedPrice.toFixed(2)} `;
    } else if (anziani) {
        const discoutedPrice = price - (price * discount40);
        out.innerHTML = ` Anni ${age} ha  sconto del 40%. Prezzo è €${discoutedPrice.toFixed(2)} `;
    } else {
        out.innerHTML = `biglietto prezzo intero è ${price}`;
    }




}