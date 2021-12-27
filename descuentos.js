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

function onclickDiscount(){
    const inputPrice = document.getElementById("inputPrice");
    const priceValue = inputPrice.value;

    const inputDiscount = document.getElementById("inputDiscount");
    const discountValue = inputDiscount.value;

    const priceDiscount = precioDescuento(priceValue, discountValue);

    const resultDiv = document.getElementById("ResultDiv");
    resultDiv.classList.remove("hidden");
    
    const resultP = document.getElementById("ResultP");
    resultP.innerText = "El precio con descuento es: $" + priceDiscount;
}