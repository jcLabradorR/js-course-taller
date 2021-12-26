//const precioOriginal = 100;
//const descuento = 15;

function precioDescuento(precio, descuento){
    const porcentajeConDesc = 100 - descuento;
    const precioFinal = (precio * porcentajeConDesc) / 100;

    return precioFinal;
}

precioDescuento(120, 15);


// console.log({
//     precioOriginal,
//     descuento,
//     porcentajeConDesc,
//     precioFinal
// })