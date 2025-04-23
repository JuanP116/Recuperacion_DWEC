let SEGUROS_MEDICOS = [
    {value: 1, texto: 'Adeslas'},
    {value: 2, texto: 'Asisa'},
    {value: 3, texto: 'Caser Salud'},
    {value: 4, texto: 'DKV'},
    {value: 5, texto: 'Mapfre'},
    {value: 6, texto: 'Sanitas'}
];

// Escribe aquí tu código

function iniciar() {
    let boton = document.getElementById("enviar");
      boton.addEventListener('click', requerirNombre);
      boton.addEventListener('click', requerirApellidos);
      boton.addEventListener('click', validarDNI);
      boton.addEventListener('click', validarFecha);
      boton.addEventListener('click', validarHora);
      document.querySelector("#inputMedicoFamilia").addEventListener("click", habilitarEspecialidad);
}
function requerirNombre() {
    if (document.getElementById("inputNombre").value == "") {
        document.getElementById('inputNombre').setCustomValidity("debe introducir un nombre");
    }else{
        document.getElementById('inputNombre').setCustomValidity("");
    }
}
function requerirApellidos() {
    if (document.getElementById("inputApellidos").value == "") {
        document.getElementById('inputApellidos').setCustomValidity("debe introducir un apellido");
    }else{
        document.getElementById('inputApellidos').setCustomValidity("");
    }
}
function validarDNI() {
    let dni=document.getElementById("inputDNI").value;
    let dniregex=/^[0-9]{8}([A-Z]|[a-z]){1}$/;
    if (dni.match(dniregex)) {
        document.getElementById("inputDNI").setCustomValidity("");
        let dniNumero = dni.substring(0, dni.length - 1);
    let resto= dniNumero % 23;
    let letras = "TRWAGMYFPDXBNJZSQVHLCKE";
    if (dni.charAt(dni.length - 1) != letras.charAt(resto)) {
        document.getElementById("inputDNI").setCustomValidity("La letra del DNI no es válida");
        
    }else{
        document.getElementById("inputDNI").setCustomValidity("");
    }
    }else{
        document.getElementById("inputDNI").setCustomValidity("Formato de DNI no válido");
    }
    
}

function anadirSeguroMedico() {
    let select=document.getElementById("inputSeguroMedico");
    for (let i = 0; i < SEGUROS_MEDICOS.length; i++) {
        let option = document.createElement("option");
        option.value = SEGUROS_MEDICOS[i].value;
        option.text = SEGUROS_MEDICOS[i].texto;
        select.appendChild(option);
    }
}

function habilitarEspecialidad() {
    let inputMedicoFamilia = document.getElementById("inputMedicoFamilia").checked;
    let inputEspecialidad = document.getElementById("inputEspecialidad");
    if (inputMedicoFamilia) {
        document.getElementById("inputEspecialidad").disabled = false;
    } else {
        document.getElementById("inputEspecialidad").disabled = true;
    }
    if (inputEspecialidad) {
        document.getElementById("inputEspecialidad").setCustomValidity("");
    } else {
        document.getElementById("inputEspecialidad").setCustomValidity("debe seleccionar una especialidad");
    }
    
}


function validarFecha() {
    let fecha=document.getElementById("inputFechaCita").value;
    let fechaObj = new Date(fecha);
    let diaSemana = fechaObj.getDay();
    if (diaSemana >= 1 && diaSemana <= 4) {
        document.getElementById("inputFechaCita").setCustomValidity("");
    } else {
        document.getElementById("inputFechaCita").setCustomValidity("La fecha debe ser de lunes a jueves");
    }
}

function validarHora() {
    let hora = document.getElementById("inputHoraCita").value;
    let fecha = document.getElementById("inputFechaCita").value;
    let fechaObj = new Date(fecha);
    let diaSemana = fechaObj.getDay();

    let [horas, minutos] = hora.split(":").map(Number);
    let horaEnMinutos = horas * 60 + minutos;

    if (
        (diaSemana >= 1 && diaSemana <= 3 && horaEnMinutos >= 600 && horaEnMinutos <= 855) || // Lunes a Miércoles (10:00-14:15)
        (diaSemana === 4 && horaEnMinutos >= 1110 && horaEnMinutos <= 1200) // Jueves (18:30-20:00)
    ) {
        document.getElementById("inputHoraCita").setCustomValidity("");
    } else {
        document.getElementById("inputHoraCita").setCustomValidity("La hora no es válida para el día seleccionado");
    }
}

addEventListener('load', iniciar() )
addEventListener('load', anadirSeguroMedico() )