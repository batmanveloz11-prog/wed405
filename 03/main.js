var alto = document.getElementById("alto");
var ancho = document.getElementById("ancho");
var color = document.getElementById("color");
var figura = document.getElementById("figura");
var radius = document.getElementById("radius");
var anchoborde = document.getElementById("anchoborde");
var tipoborde = document.getElementById("tipoborde");
var colorborde = document.getElementById("colorborde");
var colorsombra = document.getElementById("colorsombra");
var ejeX = document.getElementById("ejeX");
var ejeY = document.getElementById("ejeY");
var blur = document.getElementById("blur");
var spread = document.getElementById("spread");

alto.oninput = () => {
    figura.style.height = alto.value + "px";
    document.getElementById("valto").innerHTML = alto.value;
}
ancho.oninput = () => {
    figura.style.width = ancho.value + "px";
    document.getElementById("vancho").innerHTML = ancho.value;
}
color.onchange = () => {
    figura.style.backgroundColor = color.value;
}
radius.oninput = () => {
    figura.style.borderRadius = radius.value + "%";
    document.getElementById("vradio").innerHTML = radius.value;
}
anchoborde.oninput = () => {
    figura.style.borderWidth = anchoborde.value + "px";
    document.getElementById("vanchoborde").innerHTML = anchoborde.value;
}
tipoborde.onchange = () => {
    figura.style.borderStyle = tipoborde.value;
}
colorborde.onchange = () => {
    figura.style.borderColor = colorborde.value;
}

function actualizarSombra() {
    let x = ejeX.value;
    let y = ejeY.value;
    let b = blur.value;
    let s = spread.value;
    let colorS = colorsombra.value;
    figura.style.boxShadow = `${x}px ${y}px ${b}px ${s}px ${colorS}`;
}

blur.oninput = () => {
    document.getElementById("vblur").innerHTML = blur.value;
    actualizarSombra();
}
spread.oninput = () => {
    document.getElementById("vspread").innerHTML = spread.value;
    actualizarSombra();
}
ejeX.oninput = () => {
    document.getElementById("vejeX").innerHTML = ejeX.value;
    actualizarSombra();
}       
ejeY.oninput = () => {
    document.getElementById("vejeY").innerHTML = ejeY.value;
    actualizarSombra();
}
colorsombra.onchange = () => {    actualizarSombra();
}