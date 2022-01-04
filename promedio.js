//const lista1 = [100, 200, 300, 500];

function calcularMedia(lista) {
    // let sumaLista = 0;

    // for (let i = 0; i < lista.length; i++) {
    //     sumaLista = sumaLista + lista[i];
        
    // }

    const sumaLista = lista.reduce(
        function (valorAcumulado = 0, nuevoElemento) {
            return valorAcumulado + nuevoElemento;
        }
    );
    
    const promediolista = sumaLista / lista.length; 

    return promediolista;
}