saludar = function () {
    let nombre = document.getElementById("txtNombre");
    let valorNombre = nombre.value;
    let apellido = document.getElementById("txtApellido");
    let valorApellido = apellido.value;
    let mensaje = generarSaludo(valorNombre, valorApellido);
    console.log(mensaje);
    return mensaje
}

