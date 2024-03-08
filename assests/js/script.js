const solicitarNumero = () => {
    let numero;
    do {
        numero = parseInt(prompt("Ingrese un número entre 1 y 20:"));
        if (isNaN(numero) || numero < 1 || numero > 20) {
            alert("Número fuera del rango");
        }
    } while (isNaN(numero) || numero < 1 || numero > 20);
    return numero;
};

// Función para calcular el factorial de un número
const factorial = (n) => {
    if (n === 0 || n === 1) return 1;
    let resultado = 1;
    for (let i = 2; i <= n; i++) {
        resultado *= i;
    }
    return resultado;
};

// Función principal para obtener las tablas de multiplicar y el factorial
const obtenerTablasYFactorial = () => {
    const numero = solicitarNumero();
    let resultado = "";

    for (let i = 1; i <= numero; i++) {
        resultado += `Tabla de multiplicar del ${i}:\n`;
        for (let j = 1; j <= numero; j++) {
            resultado += `${j} x ${i} = ${j * i}\n`;
        }
        resultado += `Factorial de ${i} es: ${factorial(i)}\n\n`;
    }
    alert(resultado);
};

// Llamada a la función principal
obtenerTablasYFactorial();