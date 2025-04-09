function areaPiramide(lado,altura) {
    if (lado < 0 || altura < 0) throw new Error("Los parametros introducidos son negativos");
    let area = lado*(lado+Math.sqrt(lado*lado+4*altura*altura));
    let dato= redondearDecimales(area,3);
    return dato;
    
    
}

function redondearDecimales(numero,decimales){

    return  Math.round(numero * Math.pow(10,decimales)) / Math.pow(10,decimales);

}