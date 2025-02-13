/*Generare un numero random da 1 a 6, sia per il giocatore sia per il computer. 
Stabilire il vincitore, in base a chi fa il punteggio più alto.
Prima di partire a scrivere codice poniamoci qualche domanda per individuare 
gli strumenti necessari allo sviluppo.*/

let pc_number = Math.floor((Math.random() * 6) + 1)
console.log("Bot rolled" + " " + pc_number)

let my_number = Math.floor((Math.random() * 6) + 1)
console.log("You rolled" + " " + my_number)

if (my_number > pc_number) {
    console.log("your number wins")
} else if (pc_number > my_number) {
    console.log("pc wins roll again")
} else if (pc_number = my_number) {
    console.log("DRAW!")
}
