// const readline = require("readline");

// const rl = readline.createInterface({
//   input: process.stdin,
//   output: process.stdout
// });

// rl.question("¿Cuántas copias deseas imprimir? ", (cantidad) => {
//   cantidad = Number(cantidad);
//   let precioPorCopia = 0;

//   if (cantidad >= 1000) {
//     precioPorCopia = 50;
//   } else if (cantidad >= 750) {
//     precioPorCopia = 80;
//   } else if (cantidad >= 500) {
//     precioPorCopia = 100;
//   } else {
//     precioPorCopia = 120;
//   }

//   let precioTotal = cantidad * precioPorCopia;

//   console.log(`El precio por copia es: $${precioPorCopia}`);
//   console.log(`El precio total a pagar es: $${precioTotal}`);

//   rl.close();
// });

let copias = 0;
while (true){
    copias = Number(prompt(`Ingrese la cantidad que desea imprimir`));
    if (copias > 0) 
        break;
}

let precioPorCopia;
if (copias >= 1000) {
    precioPorCopia = 50;
} else if (copias >= 750) {
    precioPorCopia = 80;
} else if (copias >= 500) {
    precioPorCopia = 100;
} else {
    precioPorCopia = 120;
}

alert(`El precio por copia es: $${precioPorCopia} 
    \nEl precio total a pagar es: $${copias * precioPorCopia}`);