//const precioOriginal = 100;
//const descuento = 15;

function precioDescuento(precio, descuento, cupon){
    const porcentajeConDesc = 100 - descuento - cupon;
    const precioFinal = (precio * porcentajeConDesc) / 100;

    return precioFinal;
}

const coupons = ["cuponEnero22","cuponFebrero22","cuponMarzo22"];

function onclickDiscount(){
    const inputPrice = document.getElementById("inputPrice");
    const priceValue = inputPrice.value;

    const inputDiscount = document.getElementById("inputDiscount");
    const discountValue = inputDiscount.value;

    const inputCoupon = document.getElementById("InputCoupon");
    const couponValue = inputCoupon.value;

    let cupon = 0;

   switch(couponValue) {
     case coupons[0]: // "JuanDC_es_Batman"
     cupon = 2;
     break;
     case coupons[1]: // "pero_no_le_digas_a_nadie"
     cupon = 3;
     break;
     case coupons[2]: // "es_un_secreto"
     cupon = 4;
     break;
   }


    const priceDiscount = precioDescuento(priceValue, discountValue, cupon);

    const resultDiv = document.getElementById("ResultDiv");
    resultDiv.classList.remove("hidden");
    
    const resultP = document.getElementById("ResultP");
    resultP.innerText = "El precio con descuento es: $" + priceDiscount;

    
    if(cupon > 0){
      const CuponDiv = document.getElementById("CuponDiv");
      CuponDiv.classList.remove("hidden");

      const CuponP = document.getElementById("ResultC");
      CuponP.innerText = "El descuento adicional por cupon aplicado es: " + cupon + "%";
    }
}