let numero = prompt('Digite um número entre 2 a 18: ');
let numerosPares = [];
let numeroPar = 2;
let cont = 0;

while (numero > 18 || numero < 2){
    numero = prompt('Número inválido!!!\nDigite outro número entre 2 a 18: ');
}

do {
    numerosPares.push(numeroPar);
    numeroPar += 2;
    cont++;
}while (cont < numero) {
    document.write('<h1>Números Pares</h1>');
    document.write('<p>Os '+numero+' primeiros números pares: '+numerosPares+'</p>');
}