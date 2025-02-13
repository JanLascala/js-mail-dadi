/*Crea una lista di email di invitati ad una festa.
Chiedi all’utente la sua email, controlla che sia nella lista di chi può accedere,
stampa un messaggio appropriato sull’esito del controllo.
Lo svolgimento va fatto usando un ciclo for è non usando metodi degli array (come includes, per esempio) . Si puó fare??
eh si!  Basta ragionare un po’.*/

// make list

const mail_list = [`@jack`, `@inid`, `josh`]
// ask user mail
const user_mail = prompt("write your email")
// check list
for (let i = 0; i < mail_list.length; i++) {
    const this_mail = mail_list[i];
    //compare if + results
    if (this_mail === user_mail) {
        console.log("come in!")
    } else If(this_mail !== user_mail){
        console.log("bug off")
    }

}

//result+ print