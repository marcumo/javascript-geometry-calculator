// Código del cuadrado
console.group("Cuadrados");

//const ladoCuadrado = 5;
//console.log(`Los lados del cuadrado miden ${ladoCuadrado} cm`);

function perimetroCuadrado (lado) {
    return lado * 4;
}

function areaCuadrado (lado) {
    return lado * lado;
}

//const perimetroCuadrado = ladoCuadrado * 4;
//console.log(`El perímetro del cuadrado mide ${perimetroCuadrado} cm`);

//const areaCuadrado = ladoCuadrado*ladoCuadrado;
//console.log(`El área del cuadrado mide ${areaCuadrado} cm2`);

console.groupEnd();

// Código del triangulo
console.group("Triangulos");

//const ladoTriangulo1 = 6;
//const ladoTriangulo2 = 6;
//const alturaTriangulo = 5.5;
//const baseTriangulo = 6;
//console.log(`Los lados del triangulo miden ${ladoTriangulo1}, ${ladoTriangulo2} y ${baseTriangulo} cm`);

function perimetroTriangulo (lado){
    return lado * 3;
}

function areaTriangulo (lado){
    return lado * lado * Math.sqrt(3) / 2;
}

//const perimetroTriangulo = ladoTriangulo1 + ladoTriangulo2 + baseTriangulo;
//console.log(`El perímetro del triangulo mide ${perimetroTriangulo} cm`);

//const areaTriangulo = alturaTriangulo * baseTriangulo / 2;
//console.log(`El área del triangulo mide ${areaTriangulo} cm2`);

console.groupEnd();

// Código del círculo
console.group("Círculos");

// Radio
//const radioCirculo = 4;
//console.log(`El radio del círculo mide ${radioCirculo} cm`);

// Diámetro
//const diametroCirculo = radioCirculo * 2;
//console.log(`El diámetro del círculo mide ${diametroCirculo} cm`);

// PI
//const PI = Math.PI;

function perimetroCirculo (radio){
    return radio * Math.PI * 2;
}

function areaCirculo (radio){
    return radio * radio * Math.PI;
}



//Circunferencia
//const perimetroCirculo = diametroCirculo * PI;
//console.log(`El perímetro del círculo mide ${perimetroCirculo} cm`);

// Área
//const areaCirculo = radioCirculo * radioCirculo * PI;
//console.log(`El área del círculo mide ${areaCirculo} cm2`);

console.groupEnd();

// Aquí interactuamos con el HTML

function calcularPerimetroCuadrado() {
    const input = document.getElementById("lado-cuadradito");
    const value = input.value;

    const perimetro = perimetroCuadrado(value);
    alert(`El perímetro del cuadrado es ${perimetro} cm`);
}

function calcularAreaCuadrado() {
    const input = document.getElementById("lado-cuadradito");
    const value = input.value;

    const area = areaCuadrado(value);
    alert(`El área del cuadrado es ${area} cm2`);
}

function calcularPeriometroTriangulo() {
    const input = document.getElementById("lado-triangulito");
    const value = input.value;

    const perimetro = perimetroTriangulo(value);
    alert(`El perímetro del triangulo es ${perimetro} cm`);
}

function calcularAreaTriangulo() {
    const input = document.getElementById("lado-triangulito");
    const value = input.value;

    const area = areaTriangulo(value);
    alert(`El área del triángulo es ${area.toFixed(1)} cm2`);
}

function calcularPeriometroCirculo() {
    const input = document.getElementById("radio-circulito");
    const value = input.value;

    const perimetro = perimetroCirculo(value);
    alert(`El perímetro del círculo es ${perimetro.toFixed(1)} cm`);
}

function calcularAreaCirculo() {
    const input = document.getElementById("radio-circulito");
    const value = input.value;

    const area = areaCirculo(value);
    alert(`El área del círculo es ${area.toFixed(1)} cm2`);
}