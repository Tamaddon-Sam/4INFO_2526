function calcolaDifferenzeOrari(orario1, orario2) {
    let msOrario1 = (orario1.ore * 3600 + orario1.minuti * 60 + orario1.secondi) 
    let msOrario2 = (orario2.ore * 3600 + orario2.minuti * 60 + orario2.secondi) 

    let differenzaMs = msOrario2 - msOrario1


    let differenzaMinuti = differenzaSecondi / 60
    let differenzaOre = differenzaMinuti / 60

    return {
        millisecondi: differenzaMs,
        secondi: differenzaSecondi,
        minuti: differenzaMinuti,
        ore: differenzaOre
    }
}

function main() {
    let orario1 = {
        ore: 10, 
        minuti: 30, 
        secondi: 45 
    }
    let orario2 = {
        ore: 12, 
        minuti: 15, 
        secondi: 30 
    }
    let risultato1 = calcolaDifferenzeOrari(orario1, orario2)
    console.log(`Differenza - Ms: ${risultato1.millisecondi}, Secondi: ${risultato1.secondi}, Minuti: ${risultato1.minuti}, Ore: ${risultato1.ore}`)

    let orario3 = {
        ore: 8, 
        minuti: 0, 
        secondi: 0 
    }
    let orario4 = {
        ore: 14, 
        minuti: 45, 
        secondi: 20 
    }
    let risultato2 = calcolaDifferenzeOrari(orario3, orario4)
    console.log(`Differenza - Ms: ${risultato2.millisecondi}, Secondi: ${risultato2.secondi}, Minuti: ${risultato2.minuti}, Ore: ${risultato2.ore}`)
}

main()