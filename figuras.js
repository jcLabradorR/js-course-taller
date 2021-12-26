//codigo figura cuadrado
//console.group("Cuadrados");

function perimetroCuadrado(lado){
    return lado * 4;
}

function areaCuadrado(lado){
    return lado*lado;
}

//console.groupEnd();

//codigo de figura triangulo
//console.group("Triangulos");

function perimetroTriangulo(lado1, lado2, base){
    return lado1 + lado2 + base;
}

function areaTriangulo(base, altura){
  return  (base * altura) / 2;
}
//console.groupEnd();

//codigo de figura circulo
//console.group("Circulos");

//Diametro
function diametroCirculo(radio){
   return radio * 2; 
}

//Pi
const pi = Math.PI;

//Circunferencia
function perimetroCirculo(radio){
   const diametro = diametroCirculo(radio);
   return diametro * pi;
}

//Area
function areaCirculo(radio){
    return (radio * radio) * pi;
}

//console.groupEnd();

//para interactuar con el html
function calcularPerimetroCuadrado() {
    const input = document.getElementById("InputCuadrado");
    const value = input.value;
  
    const perimetro = perimetroCuadrado(value);
    alert(perimetro);
  }
  
  function calcularAreaCuadrado() {
    const input = document.getElementById("InputCuadrado");
    const value = input.value;
  
    const area = areaCuadrado(value);
    alert(area);
  }