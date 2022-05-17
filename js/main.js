const nomeUtente = prompt("Qual è il tuo nome?");
const cognomeUtente = prompt("Qual è il tuo cognome?");
const colorePreferito = prompt("Qual è il tuo colore preferito?")


// prova calcoli
const annoDuemila = 0;
let anniPassatiDalDuemila;
anniPassatiDalDuemila = 22;
const anno = annoDuemila + anniPassatiDalDuemila;

const passwordUtente = document.getElementById("password-utente");

passwordUtente.innerHTML = `<div>
                                <strong>${nomeUtente}${cognomeUtente}${colorePreferito}${anno}</strong>
                            </div>`;

console.log(passwordUtente);