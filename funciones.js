function seleccionar(){
    document.getElementById("nav").innerHTML= "";
    
}
document.getElementById("nav").onclick=function(){
    seleccionar();
};


function cambiamensaje(){
    document.getElementById("button").innerHTML="mensaje enviado";
}
document.getElementById("button").onclick=function(){
    cambiamensaje();
};


function toggleTema() {
    document.body.classList.toggle('oscuro');
}
