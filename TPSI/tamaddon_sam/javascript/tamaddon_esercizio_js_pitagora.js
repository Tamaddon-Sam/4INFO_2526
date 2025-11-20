function aggiungiValore() {
    let n1 = document.getElementById("colonne").value;
    let tabella = document.getElementById("tabella");

    if (n1 <13 || n1 > 3) {
        for (let i = 0; i < n1; i++) { //qua io con 2 for mi creao una tabella pitagorica
            let colonna = document.createElement("tr");//colonne
            tabella.append(colonna);
            for (let j = 0; j < n1; j++) {
                let cella = document.createElement("td");//righe
                cella2 = i*j;
                cella.append(cella2);//in questi ultimi passaggi unisco rifhe e colonne e creo la tabella finita
                cella.id = cella2;
                colonna.append(cella);
            }       
        }
    }
    else{
        alert("il valore deve essere compreso fra 4 e 12");//do un messaggio al utente se no  rispetta i campi che gli ho detto di inserire
    }
}
 