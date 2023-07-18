const Usuario = {
  genero: "",
  edad: 0,
  altura: 0,
  peso: 0,
  nombre: "",
  dni: "",
  obraSocialNombre: "",
  obraSocialNumero: "",
  dia: "",
  imc: 0
};

const doctores = [
  "Dr. Juan Pérez",
  "Dra. Ana Gómez",
  "Dr. Carlos Rodríguez",
  "Dra. Laura Martínez",
  "Dr. Alejandro López"
];

// Función para seleccionar un doctor aleatorio del array
function seleccionarDoctorAleatorio() {
  const indiceAleatorio = Math.floor(Math.random() * doctores.length);
  return doctores[indiceAleatorio];
}

const resumen = document.querySelector(".resumen");
const respuesta = document.querySelector(".respuesta");
const nombreElement = document.querySelector(".nombre");
const obraSocialNombreElement = document.querySelector(".obraSocialNombre");
const obraSocialNumeroElement = document.querySelector(".obraSocialNumero");
const dniElement = document.querySelector(".dni");
const diaElement = document.querySelector(".dia");

const formulario = document.getElementById("formulario");
formulario.addEventListener("submit", obtenerDatos);

function obtenerDatos(event) {
  event.preventDefault();

  Usuario.genero = document.getElementById("genero").value;
  Usuario.edad = parseFloat(document.getElementById("edad").value);
  Usuario.altura = parseFloat(document.getElementById("altura").value.replace(",", "."));
  Usuario.peso = parseFloat(document.getElementById("peso").value);

  calcularIMC();
}

function calcularIMC() {
  let imc = Usuario.peso / (Usuario.altura * Usuario.altura);
  Usuario.imc = imc.toFixed(2);

  if ((Usuario.genero === "M" || Usuario.genero === "m") && Usuario.edad > 19) {
    if (imc <= 19) {
      mostrarResultado("Usted tiene bajo peso, le recomendamos comunicarse con nuestro nutricionista");
    } else if (imc <= 25) {
      mostrarResultado("Usted está perfecto. Gracias por su visita.");
    } else if (imc <= 30) {
      mostrarResultado("Usted tiene Sobrepeso, le recomendamos realizar alguna actividad física.");
    } else if (imc <= 40) {
      mostrarResultado("Usted tiene Obesidad de grado 1, comuníquese con algunos de nuestros médicos.");
    } else {
      mostrarResultado("Usted tiene Obesidad de un grado muy alto, comuníquese con urgencia con nuestros doctores.");
    }
  } else if ((Usuario.genero === "F" || Usuario.genero === "f") && Usuario.edad > 19) {
    if (imc <= 17) {
      mostrarResultado("Usted tiene bajo peso, le recomendamos comunicarse con nuestro nutricionista.");
    } else if (imc <= 23) {
      mostrarResultado("Usted está perfecto. Gracias por su visita.");
    } else if (imc <= 28) {
      mostrarResultado("Usted tiene Sobrepeso, le recomendamos realizar alguna actividad física.");
    } else if (imc <= 38) {
      mostrarResultado("Usted tiene Obesidad de grado 1, comuníquese con algunos de nuestros médicos.");
    } else {
      mostrarResultado("Usted tiene Obesidad de un grado muy alto, comuníquese con urgencia con nuestros doctores.");
    }
  } else {
    mostrarResultado("Usted no tiene edad para preocuparse por esto ahora");
  }
}

function mostrarResultado(mensaje) {
  resumen.textContent = mensaje;

  if (Usuario.imc > 30 || Usuario.imc < 19) {
    respuesta.textContent = "Usted está teniendo problemas con su peso. ¿Le gustaría atenderse con uno de nuestros médicos?";

    const botonAceptar = document.createElement("button");
    botonAceptar.textContent = "Aceptar";
    botonAceptar.addEventListener("click", mostrarFormulario);

    respuesta.appendChild(botonAceptar);
  }
}

function mostrarFormulario() {
  respuesta.textContent = "";

  const nombreLabel = document.createElement("label");
  nombreLabel.textContent = "Nombre:";
  const nombreInput = document.createElement("input");
  nombreInput.type = "text";
  nombreInput.name = "nombre";

  const dniLabel = document.createElement("label");
  dniLabel.textContent = "DNI:";
  const dniInput = document.createElement("input");
  dniInput.type = "text";
  dniInput.name = "dni";

  const obraSocialNombreLabel = document.createElement("label");
  obraSocialNombreLabel.textContent = "Nombre de la obra social:";
  const obraSocialNombreInput = document.createElement("input");
  obraSocialNombreInput.type = "text";
  obraSocialNombreInput.name = "obraSocialNombre";

  const obraSocialNumeroLabel = document.createElement("label");
  obraSocialNumeroLabel.textContent = "Número de la obra social:";
  const obraSocialNumeroInput = document.createElement("input");
  obraSocialNumeroInput.type = "text";
  obraSocialNumeroInput.name = "obraSocialNumero";

  const diaLabel = document.createElement("label");
  diaLabel.textContent = "Día de preferencia (dd/mm):";
  const diaInput = document.createElement("input");
  diaInput.type = "text";
  diaInput.name = "dia";

  const botonConfirmar = document.createElement("button");
  botonConfirmar.textContent = "Confirmar";
  botonConfirmar.addEventListener("click", mostrarConfirmacion);

  respuesta.appendChild(nombreLabel);
  respuesta.appendChild(nombreInput);
  respuesta.appendChild(document.createElement("br"));
  respuesta.appendChild(dniLabel);
  respuesta.appendChild(dniInput);
  respuesta.appendChild(document.createElement("br"));
  respuesta.appendChild(obraSocialNombreLabel);
  respuesta.appendChild(obraSocialNombreInput);
  respuesta.appendChild(document.createElement("br"));
  respuesta.appendChild(obraSocialNumeroLabel);
  respuesta.appendChild(obraSocialNumeroInput);
  respuesta.appendChild(document.createElement("br"));
  respuesta.appendChild(diaLabel);
  respuesta.appendChild(diaInput);
  respuesta.appendChild(document.createElement("br"));
  respuesta.appendChild(botonConfirmar);
}

function mostrarConfirmacion() {
  const nombreInput = document.querySelector("input[name='nombre']");
  const dniInput = document.querySelector("input[name='dni']");
  const obraSocialNombreInput = document.querySelector("input[name='obraSocialNombre']");
  const obraSocialNumeroInput = document.querySelector("input[name='obraSocialNumero']");
  const diaInput = document.querySelector("input[name='dia']");

  if (nombreInput && dniInput && obraSocialNombreInput && obraSocialNumeroInput && diaInput) {
    const nombre = nombreInput.value;
    const dni = dniInput.value;
    const obraSocialNombre = obraSocialNombreInput.value;
    const obraSocialNumero = obraSocialNumeroInput.value;
    const dia = diaInput.value;

    const doctor = seleccionarDoctorAleatorio();

    nombreElement.textContent = `Gracias ${nombre}, sus datos fueron tomados`;
    dniElement.textContent = `Su DNI: ${dni}`;
    obraSocialNombreElement.textContent = `Su obra social: ${obraSocialNombre}`;
    obraSocialNumeroElement.textContent = `El número de la obra social: ${obraSocialNumero}`;
    diaElement.textContent = `Su turno es el día: ${dia}/2023 con el doctor ${doctor}`;
    respuesta.textContent = "Gracias por elegirnos";

    // Guardar los datos en sessionStorage
    sessionStorage.setItem("nombre", nombre);
    sessionStorage.setItem("dni", dni);
    sessionStorage.setItem("obraSocialNombre", obraSocialNombre);
    sessionStorage.setItem("obraSocialNumero", obraSocialNumero);
    sessionStorage.setItem("dia", dia);
  } else {
    console.log("No se encontraron los elementos del formulario");
  }
}

// Función para borrar los datos de sesión y limpiar la interfaz
function borrarDatosSesion() {
  sessionStorage.removeItem("nombre");
  sessionStorage.removeItem("dni");
  sessionStorage.removeItem("obraSocialNombre");
  sessionStorage.removeItem("obraSocialNumero");
  sessionStorage.removeItem("dia");
  console.log("Datos de sesión borrados");

  nombreElement.textContent = "";
  dniElement.textContent = "";
  obraSocialNombreElement.textContent = "";
  obraSocialNumeroElement.textContent = "";
  diaElement.textContent = "";
  resumen.textContent = "";
  respuesta.textContent = "";
}

// Obtener los datos de sesión al cargar la página
window.addEventListener("load", function() {
  const nombre = sessionStorage.getItem("nombre");
  const dni = sessionStorage.getItem("dni");
  const obraSocialNombre = sessionStorage.getItem("obraSocialNombre");
  const obraSocialNumero = sessionStorage.getItem("obraSocialNumero");
  const dia = sessionStorage.getItem("dia");

  if (nombre && dni && obraSocialNombre && obraSocialNumero && dia) {
    nombreElement.textContent = `Gracias ${nombre}, sus datos fueron tomados`;
    dniElement.textContent = `Su DNI: ${dni}`;
    obraSocialNombreElement.textContent = `Su obra social: ${obraSocialNombre}`;
    obraSocialNumeroElement.textContent = `El número de la obra social: ${obraSocialNumero}`;
    diaElement.textContent = `Su turno es el día: ${dia}/2023 con el doctor ${seleccionarDoctorAleatorio()}`;
    respuesta.textContent = "Gracias por elegirnos";
  }
});

const botonBorrarDatos = document.createElement("button");
botonBorrarDatos.textContent = "Borrar datos de sesión";
botonBorrarDatos.addEventListener("click", borrarDatosSesion);

respuesta.appendChild(botonBorrarDatos);
