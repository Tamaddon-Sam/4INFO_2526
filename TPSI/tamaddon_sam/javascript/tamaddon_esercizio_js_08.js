function add(){
  let dipartimento = document.getElementById("dipartimento").value
  let cognome = document.getElementById("cognome").value
  let nome = document.getElementById("nome").value
  let mese = document.getElementById("mese").value
  let importo = document.getElementById("importo").value
  
  if (dipartimento == "" || cognome == "" || nome == "" || mese == "" || importo == "") {
    alert("completa tutti i campi");
    return;
  }
  let cella_dipartimento = document.createElement("td")
  let cella_cognome = document.createElement("td")
  let cella_nome = document.createElement("td")
  let cella_mese = document.createElement("td")
  let cella_importo = document.createElement("td")

  cella_dipartimento.innerText = dipartimento
  cella_cognome.innerText = cognome
  cella_nome.innerText = nome
  cella_mese.innerText = mese
  cella_importo.innerText = importo

  let riga = document.createElement("tr")

  riga.append(cella_dipartimento)
  riga.append(cella_cognome)
  riga.append(cella_nome)
  riga.append(cella_mese)
  riga.append(cella_importo)

  let tabella = document.getElementById("paghe")
  tabella.append(riga)
}


function somma(){
  let somma = 0
  let tabella = document.getElementById("paghe")
  for (let i = 2; i < tabella.children.length; i++) {
    riga = tabella.children[i]
    cella = Number (riga.children[4].innerText)
    somma = cella + somma
  }

  let body = document.getElementById("body")
  let tabellaSomma = document.createElement("table")
  let rigaLineaSup = document.createElement("tr")
  let rigaPrezzo = document.createElement("tr")
  let rigaLineaInf = document.createElement("tr")
  let tdRigaSup = document.createElement("td")
  let tdCentrTotale = document.createElement("td")
  let tdCentrPrezzo = document.createElement("td")
  let tdRigaInf = document.createElement("td")
  let hrRigaSup = document.createElement("hr")
  let hrRigaInf = document.createElement("hr")
  

  tdRigaSup.colSpan = 5
  tdCentrTotale.colSpan = 4
  tdRigaInf.colSpan = 5
  tdCentrPrezzo.classList.add("importo")
  

  tdCentrTotale.innerHTML = "TOTALE"
  tdCentrPrezzo.innerHTML = `${somma} €`

  tabellaSomma.append(rigaLineaSup)
  tabellaSomma.append(rigaPrezzo)
  tabellaSomma.append(rigaLineaInf)
  rigaLineaSup.append(tdRigaSup)
  rigaPrezzo.append(tdCentrTotale)
  rigaPrezzo.append(tdCentrPrezzo)
  rigaLineaInf.append(tdRigaInf)
  tdRigaSup.append(hrRigaSup)
  tdRigaInf.append(hrRigaInf)
  body.append(tabellaSomma)




}
function media(){
  let somma = 0
  
  let tabella = document.getElementById("paghe")
  for (let i = 2; i < tabella.children.length; i++) {
    riga = tabella.children[i]
    cella = Number (riga.children[4].innerText)
    somma = cella + somma
  }
  let media = somma /cella.length

  let body = document.getElementById("body")
  let tabellaSomma = document.createElement("table")
  let rigaLineaSup = document.createElement("tr")
  let rigaPrezzo = document.createElement("tr")
  let rigaLineaInf = document.createElement("tr")
  let tdRigaSup = document.createElement("td")
  let tdCentrTotale = document.createElement("td")
  let tdCentrPrezzo = document.createElement("td")
  let tdRigaInf = document.createElement("td")
  let hrRigaSup = document.createElement("hr")
  let hrRigaInf = document.createElement("hr")
  

  tdRigaSup.colSpan = 5
  tdCentrTotale.colSpan = 4
  tdRigaInf.colSpan = 5
  tdCentrPrezzo.classList.add("importo")
  

  tdCentrTotale.innerHTML = "TOTALE"
  tdCentrPrezzo.innerHTML = `${media} €`

  tabellaSomma.append(rigaLineaSup)
  tabellaSomma.append(rigaPrezzo)
  tabellaSomma.append(rigaLineaInf)
  rigaLineaSup.append(tdRigaSup)
  rigaPrezzo.append(tdCentrTotale)
  rigaPrezzo.append(tdCentrPrezzo)
  rigaLineaInf.append(tdRigaInf)
  tdRigaSup.append(hrRigaSup)
  tdRigaInf.append(hrRigaInf)
  body.append(tabellaSomma)
}

