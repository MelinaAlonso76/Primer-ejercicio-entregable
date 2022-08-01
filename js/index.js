let continuar = true;
const PI = 3.141592;

while (continuar) {
    let opcion = parseInt(prompt("Seleccione una figura: [1- circulo, 2- triangulo, 3- cuadrado, 4- salir]"));
    switch (opcion) {
        case 1:
            let radio = parseInt(prompt("Ingrese el radio de su circulo"));
            alert("El area de su circulo es: " + areaCirculo(radio));
            break;
        case 2:
            let base = parseInt(prompt("Ingrese la base de su triangulo"));
            let altura = parseInt(prompt("Ingrese la altura de su triangulo"));
            alert("El area de su triangulo es: " + areaTriangulo(base, altura));
            break;
        case 3:
            let lado = parseInt(prompt("Ingrese la medida de uno de los lados de su cuadrado"));
            alert("El area de su cuadrado es: " + areaCuadrado(lado));
            break;
        case 4:
            alert('Nos vemos pronto')
            continuar = false;
            break;
        default:
            alert("La opcion que eligio no esta disponible");
    }
}

function areaCirculo(r) {
    return PI * (r * r);
}

function areaTriangulo(b, a) {
    return (b * a) / 2;
}

function areaCuadrado(l) {
    return l * l;
}
