const nomeUtente = prompt("Qual è il tuo nome?");
const cognomeUtente = prompt("Qual è il tuo cognome?");
const colorePreferito = prompt ("Qual è il tuo colore preferito?")

const infoUtente = document.getElementById("nome-utente");

infoUtente.innerHTML = `${nomeUtente} ${cognomeUtente} ${colorePreferito}`;

console.log("infoUtente");