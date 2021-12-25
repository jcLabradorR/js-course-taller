//codigo figura cuadrado
console.group("Cuadrados");

const ladoCuadrado = 5;
console.log("Los lados del cuadrado miden: "+ ladoCuadrado+ " cm");

const perimetroCuadrado = ladoCuadrado * 4;
console.log("el perimetro mide: "+ perimetroCuadrado+ " cm");

const areaCuadrado = ladoCuadrado * ladoCuadrado;
console.log("el area del cuadrado es mide: "+areaCuadrado+ " cm2");

console.groupEnd();

//codigo de figura triangulo
console.group("Triangulos");
const ladoTriangulo1 = 6;
const ladoTriangulo2 = 6;
const baseTriangulo = 4;

console.log("Los lados del triangulo miden: "
+ ladoTriangulo1+ " cm," 
+ ladoTriangulo2+ " cm, " 
+ baseTriangulo+ " cm ");

const alturaTriangulo = 5.5;
console.log("el altura de triangulo mide: "+ alturaTriangulo+ " cm");

const perimetroTriangulo = ladoTriangulo1 + ladoTriangulo2 + baseTriangulo;
console.log("el perimetro mide: "+ perimetroTriangulo+ " cm");

const areaTriangulo = (baseTriangulo * alturaTriangulo) / 2;
console.log("el area del triangulo es mide: "+areaTriangulo+ " cm2");

console.groupEnd();

//codigo de figura circulo
console.group("Circulos");

//radio
const radioCirculo = 4;
console.log("el radio del circulo mide: "+ radioCirculo + " cm");

//Diametro
const diametroCirculo = radioCirculo * 2;
console.log("el diametro del circulo mide: "+ diametroCirculo + " cm");

//Pi
const pi = Math.PI;
console.log("el valor pi mide: "+ pi + " cm");

//Circunferencia
const perimetroCirculo = diametroCirculo * pi;
console.log("el perimetro del circulo es: "+ perimetroCirculo + " cm");

//Area
const areaCirculo = (radioCirculo * radioCirculo) * pi;
console.log("el perimetro del circulo es: "+ areaCirculo + " cm");


console.groupEnd();