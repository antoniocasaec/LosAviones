generarSaludo = function (p_nombre, p_apellido) {
    let resultado = "Hola " + p_nombre + " " + p_apellido;
    mostrarTexto("lbResultado",resultado);
    return resultado;
}

mostrarTexto=function(idComponente,mensaje){
    let componente;
    componente=document.getElementById(idComponente);
    componente.innerText = mensaje;
}