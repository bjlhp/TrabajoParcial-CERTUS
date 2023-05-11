$("document").ready(function () {
    $("#registroUsuario").submit(function () {
        return function () {
            let response = confirm("¿Seguro que deseas enviar?");
            if (response) { // Caso presiona Aceptar
                /* Obtener un campo */
                let txtNombre = $("#txtNombre").value;
                let txtCorreo = $("#txtCorreo").value;
                /* Validar el valor del campo nombre */
                if (txtNombre.length > 50 || txtNombre.length < 2) {
                    alert("Su nombre no es aceptado")
                    return false;
                }
                /* Validar el valor del campo */
                if (txtCorreo.match(/^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/) == null) {
                    alert("Correo incorrecto");
                    return true;
                }
            } else { //Caso presiona Cancelar
                return false;
            }
        };
    })
})