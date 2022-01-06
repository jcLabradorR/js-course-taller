//  Paso 1: Definir los tramos y la velocidad de desplazamiento en cada tramo.

const  tramos = [
    {
        tramo: 100,
        vel: 170,
    },
    {
        tramo: 100,
        vel: 30,
    },
    {
        tramo: 100,
        vel: 110,
    },
    {
        tramo: 100,
        vel: 180,
    },
];

// Paso 2: Crear un array con 1 / velocidades.

const VelDiv = tramos.map(function (tramosObject) {
     return (1 / tramosObject.vel);
 });


 // sumar Veldiv
 const sumVelDiv = VelDiv.reduce(
    function (sum = 0, newVal) {
        return sum + newVal;
    }
);

//funcion para calcular armonica

function calMedArmonica() {
    armonica = tramos.length / sumVelDiv;

    return armonica;
}





