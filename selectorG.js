const color1=document.getElementById("color1"); //o se puede poner const color1=document.getElementById("color1").value;
const color2=document.getElementById("color2");
const separa=document.getElementById("separa");
const fondo=document.getElementById("fondo");

separa.addEventListener("input",CambiarColor);

function CambiarColor(){

    console.log("dentro de la función");

    fondo.style.background =`linear-gradient(to right,${color1.value} ${separa.value}%,${color2.value})`;
    
}
