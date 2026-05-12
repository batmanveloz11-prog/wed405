const calcular = () => {
    var producto = document.querySelector("#producto").value;
    var img = document.querySelector("#img");
    var precio = document.querySelector("#precio");
    var costo = 0;
    var plazo = 0;
    var porcentaje = 0;
    img.innerHTML=`<img src="img/${producto}.png" alt="${producto}" width="400px">`;
    switch (producto) {
        case "tv": costo = 10000; break;
        case "comedor": costo = 15000; break;
        case "lavadora": costo = 18000; break;
        case "moto": costo = 30000; break;
        case "sala": costo = 21000; break;
        
    }
    precio.innerHTML = `<h3>Precio: $ ${costo.toFixed(2)} MXN</h3>`;
    var uno = document.querySelector("#uno");
    var dos = document.querySelector("#dos");
    var tres = document.querySelector("#tres");
    var cantidad = document.querySelector("#cantidad").value;
    if (uno.checked) {
        plazo = 6;
        porcentaje = 0.1;
    } else if (dos.checked) {
        plazo = 12;
        porcentaje = 0.15;
    } else {
        plazo = 18;
        porcentaje = 0.20;
    }
    var contado = costo * porcentaje;
    var abono = credito / plazo;
    var credito = contado+(contado * porcentaje);
    var abono = credito / plazo;
    document.querySelector("#contado").innerHTML = `<h3>Precio del Contado: $ ${contado.toFixed(2)} MXN</h3>`;
    document.querySelector("#credito").innerHTML = `<h3>Precio del Crédito: $ ${credito.toFixed(2)} MXN</h3>`;
    document.querySelector("#abono").innerHTML = `<h3>Abono Mensual: $ ${abono.toFixed(2)} MXN</h3>`;

}