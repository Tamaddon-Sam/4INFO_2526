function somma(max){
        max = Number(max)

    let somma = 0

    for (let i = 0; i <= max; i++) {
        somma = somma + i
    }

    return somma
}

function main(){
    console.log(somma(3))
    console.log(somma("12"))
    console.log(somma(2))
}

main()