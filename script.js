// while
console.log('while');
let tabuada = 5;
let contador = 0;

while (contador <=10) {
    let resultado = tabuada * contador;
    console.log(tabuada + ' x ' + contador + ' = ' + resultado);
    contador++;
}

// for
console.log('for')

for (let contador2 = 0; contador2 <=10; contador2++){
    let resultado = tabuada * contador2;
    console.log(tabuada + ' x ' + contador2 + ' = ' + resultado);
}

//do while
console.log('do while')

let contador3 = 0;
do{
    let resultado = tabuada * contador3;
    console.log(tabuada + ' x ' + contador3 + ' = ' + resultado);
    contador3++;
} while (contador3 <= 10);