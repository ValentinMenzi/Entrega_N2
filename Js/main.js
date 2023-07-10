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

Usuario.genero = prompt("Ingrese su género con M para Masculino o F para Femenino");
Usuario.edad = parseFloat(prompt("Ingrese su edad"));

let resumen = document.getElementsByClassName("resumen")[0];
let respuesta = document.getElementsByClassName("respuesta")[0];
let nombreElement = document.getElementsByClassName("nombre")[0];
let obraSocialNombreElement = document.getElementsByClassName("obraSocialNombre")[0];
let obraSocialNumeroElement = document.getElementsByClassName("obraSocialNumero")[0];
let dniElement = document.getElementsByClassName("dni")[0];
let diaElement = document.getElementsByClassName("dia")[0];

let imc = 0;

if ((Usuario.genero === "M" || Usuario.genero === "m") && Usuario.edad > 19) {
  Usuario.altura = parseFloat(prompt("Ingrese su altura con el signo ( . )"));
  Usuario.peso = parseFloat(prompt("Ingrese su peso"));

  imc = Usuario.peso / (Usuario.altura * Usuario.altura);

  if (imc <= 19) {
    resumen.innerHTML = "Usted tiene bajo peso, le recomendamos comunicarse con nuestro nutricionista";
  } else if (imc <= 25) {
    resumen.innerHTML = "Usted está perfecto. Gracias por su visita.";
  } else if (imc <= 30) {
    resumen.innerHTML = "Usted tiene Sobrepeso, le recomendamos realizar alguna actividad física.";
  } else if (imc <= 40) {
    resumen.innerHTML = "Usted tiene Obesidad de grado 1, comuníquese con algunos de nuestros médicos.";
  } else {
    resumen.innerHTML = "Usted tiene Obesidad de un grado muy alto, comuníquese con urgencia con nuestros doctores.";
  }
} else if ((Usuario.genero === "F" || Usuario.genero === "f") && Usuario.edad > 19) {
  Usuario.altura = parseFloat(prompt("Ingrese su altura con el signo ( . )"));
  Usuario.peso = parseFloat(prompt("Ingrese su peso"));

  imc = Usuario.peso / (Usuario.altura * Usuario.altura);

  if (imc <= 17) {
    resumen.innerHTML = "Usted tiene bajo peso, le recomendamos comunicarse con nuestro nutricionista.";
  } else if (imc <= 23) {
    resumen.innerHTML = "Usted está perfecto. Gracias por su visita.";
  } else if (imc <= 28) {
    resumen.innerHTML = "Usted tiene Sobrepeso, le recomendamos realizar alguna actividad física.";
  } else if (imc <= 38) {
    resumen.innerHTML = "Usted tiene Obesidad de grado 1, comuníquese con algunos de nuestros médicos.";
  } else {
    resumen.innerHTML = "Usted tiene Obesidad de un grado muy alto, comuníquese con urgencia con nuestros doctores.";
  }
} else {
  resumen.innerHTML = "Usted no tiene edad para preocuparse por esto ahora";
}

if (imc > 30 || imc < 19) {
  let respuestaUsuario = prompt("Usted esta teniendo porblemas con su peso ¿Le gustaría atenderse con uno de nuestros médicos? (si o no)");

  if (respuestaUsuario.toLowerCase() === "si") {
    Usuario.nombre = prompt("Ingrese su Nombre");
    Usuario.dni = prompt("Ingrese su DNI");
    Usuario.obraSocialNombre = prompt("Ingrese el nombre de su obra social");
    Usuario.obraSocialNumero = prompt("Ingrese el número de su obra social");
    Usuario.dia = prompt("Ingrese el día que le gustaría asistir (dd/mm)");

    let doctor = seleccionarDoctorAleatorio();

    nombreElement.textContent = `Gracias ${Usuario.nombre} sus datos fueron tomados`;
    dniElement.textContent = `Su DNI: ${Usuario.dni}`;
    obraSocialNombreElement.textContent = `Su obra social: ${Usuario.obraSocialNombre}`;
    obraSocialNumeroElement.textContent = `El número de la obra social: ${Usuario.obraSocialNumero}`;
    diaElement.textContent = `Su turno es el día: ${Usuario.dia}/2023 con el doctor ${doctor}`;
    respuesta.innerHTML = "Gracias por elegirnos";
  }
}
