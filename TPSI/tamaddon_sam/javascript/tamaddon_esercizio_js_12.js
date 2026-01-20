let auto = function (colore, modelli,marca){
  (this.colore = colore),
  (this.modelli = modelli),
  (this.marca = marca),
  (this.accensione = function () {
      console.log(`auto ${this.modelli}  ${this.marca} si accende`);
    });
  (this.cambio = function () {
      console.log(`auto ${this.modelli}  ${this.marca} de fare ilo tagliando e cambiare le gomme di marca ${this.ruote} ogni 3 metri`);
    });
  (this.accelera = function () {
      console.log(`auto ${this.modelli}  ${this.marca} va avanti`);
    });
  
}
let animale = function (colore,tipo,zampe){
  (this.colore = colore),
  (this.tipo = tipo),
  (this.zampe = zampe),
  (this.tipologia = function () {
      console.log(`l'animale ${this.tipo} ha  ${this.zampe}`);
    });
  (this.color = function () {
      console.log(`l'animale, ${this.colore} è ${this.tipo}  `);
    });
  (this.num_zamp = function () {
      console.log(`l'animale ${this.colore} che ha ${this.zampe} `);
    });
  
}
let poligono = function (quadrato, triangolo, pentagono){
  (this.quadrato = quadrato),
  (this.triangolo = triangolo),
  (this.pentagono = pentagono),
  (this.accensione = function () {
      console.log(`auto ${this.modelli}  ${this.marca} si accende`);
    });
  (this.cambio = function () {
      console.log(`auto ${this.modelli}  ${this.marca} de fare ilo tagliando e cambiare le gomme di marca ${this.ruote} ogni 3 metri`);
    });
  (this.accelera = function () {
      console.log(`auto ${this.modelli}  ${this.marca} va avanti`);
    });
  
}

let auto1 = new auto("rosso", "ferrari", "carbon", "458", "pirelli")
let auto2 = new auto("verde", "abart", "rame", "500", "pirelli")
let auto3 = new auto("blu", "lambo", "carbon", "urus", "michellen")
let auto4 = new auto("marrone", "jeep", "rame", "500", "pirelli")
let auto5 = new auto("arcobalena", "ferrari", "carbon", "458", "pirelli")

let animale1 = new animale("rosso", "ferrari", "carbon", "458", "pirelli")
let animale2 = new animale("verde", "abart", "rame", "500", "pirelli")
let animale3 = new animale("blu", "lambo", "carbon", "urus", "michellen")
let animale4 = new animale("marrone", "jeep", "rame", "500", "pirelli")
let animale5 = new animale("arcobalena", "ferrari", "carbon", "458", "pirelli")

let poligono1 = new poligono("rosso", "ferrari", "carbon", "458", "pirelli")
let poligono2 = new poligono("verde", "abart", "rame", "500", "pirelli")
let poligono3 = new poligono("blu", "lambo", "carbon", "urus", "michellen")
let poligono4 = new poligono("marrone", "jeep", "rame", "500", "pirelli")
let poligono5 = new poligono("arcobalena", "ferrari", "carbon", "458", "pirelli")
