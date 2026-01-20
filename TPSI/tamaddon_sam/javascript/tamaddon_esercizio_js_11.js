let auto = function (colore, modelli, materiale, marca, ruote){
    (this.colore = colore),
    (this.modelli = modelli),
    (this.materiale = materiale),
    (this.marca = marca),
    (this.ruote = ruote),
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
auto1.accensione()
auto2.accensione()
auto3.accensione()
auto4.accensione()
auto5.accensione()

auto1.cambio()
auto2.cambio()
auto3.cambio()
auto4.cambio()
auto5.cambio()

auto1.accelera()
auto2.accelera()
auto3.accelera()
auto4.accelera()
auto5.accelera()