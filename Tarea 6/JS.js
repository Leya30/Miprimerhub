//el mayor de los numeros
function numeros(n1,n2,n3,mayor,medio){
    n1=prompt("ingrese el numero 1");
    n2=prompt("ingrese numero 2");
    n3=prompt("ingrese numero 3");
    if(n1>n2){
        medio=n1;
    }else{
        medio=n2;
    }
    if(medio>n3){
        mayor=medio
    }else{mayor=n3}
    document.write("el numero mayor es "+mayor)
}
//el segundo mayor de numeros
function numeros2(n1,n2,n3,mayor,medio){
    n1=prompt("ingrese el numero 1");
    n2=prompt("ingrese numero 2");
    n3=prompt("ingrese numero 3");
    if(n1>n2){
        medio=n1;
    }else{
        medio=n2;
    }
    if(medio>n3){
        mayor=medio
    }else{mayor=n3}
    document.write("el segundo mayor es "+medio);
}
//Menor numero
function menorNumero() {
    const a = prompt("ingrese el numero 1");
    const b = prompt("ingrese numero 2");
    const c = prompt("ingrese numero 3");
    const lista = [a, b, c];
  
    const ordenado = lista.sort((a, b) => a - b);
    document.write("el  numero medio es "+ordenado[1])
    
  }
//convertir grados
  function convertirHorasMinutos(numero) {
    numero=prompt("ingrese grados")
    if(Number.isInteger(numero)) {
        if (numero > 0) {
            let horas = Math.floor(numero / 60);
            let minutos = numero % 60;

            horas = ('0' + horas).slice(-2);
            minutos = ('0' + minutos).slice(-2);
            return `${horas}:${minutos}`;
        } else {
            return null;
        }
    } else {
        throw new Error('El valor pasado como argumento no es un número entero.');
    }
}

try {
    consol
Listo