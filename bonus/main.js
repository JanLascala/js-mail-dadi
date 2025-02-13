/*Crea una lista di email di invitati ad una festa.
Chiedi all’utente la sua email, controlla che sia nella lista di chi può accedere,
stampa un messaggio appropriato sull’esito del controllo.
Lo svolgimento va fatto usando un ciclo for è non usando metodi degli array (come includes, per esempio) . Si puó fare??
eh si!  Basta ragionare un po’. :point_right: 
Bonus:
Dopo aver svolto l'esercizio con il for  fai una cartella bonus e svolgilo anche anche usando un 
metodo delle array tipo includes*/


const mail_list = [`@jack`, `@inid`, `josh`]
console.log(mail_list)

const user_mail = prompt("write your mail")

console.log(mail_list.includes(user_mail))

let mail_found = mail_list.includes(user_mail)

if (mail_found === true) {
    console.log("welcome")
} else {
    console.log("unwelcome")
}

