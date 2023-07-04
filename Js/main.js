let genero = prompt("Ingrese su Genero con M para Masculino o F para Femenino ");
let edad = parseFloat(prompt("Ingrese su edad"));

let resumen = document.getElementsByClassName("resumen")[0];
let respuesta = document.getElementsByClassName("respuesta")[0];
let nombreElement = document.getElementsByClassName("nombre")[0];
let obraSocialNombreElement = document.getElementsByClassName("obraSocialNombre")[0];
let obraSocialNumeroElement = document.getElementsByClassName("obraSocialNumero")[0];
let dniElement = document.getElementsByClassName("dni")[0];
let diaElement = document.getElementsByClassName("dia")[0];

let imc = 0;

if ((genero === "M" || genero === "m") && edad > 19) {
  let altura = parseFloat(prompt("Ingrese su altura con el signo ( . )"));
  let peso = parseFloat(prompt("Ingrese su peso"));

  imc = peso / (altura * altura);

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
} else if ((genero === "F" || genero === "f") && edad > 19) {
  let altura = parseFloat(prompt("Ingrese su altura con el signo ( . )"));
  let peso = parseFloat(prompt("Ingrese su peso"));

  imc = peso / (altura * altura);

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
    let nombre = prompt("Ingrese su Nombre");
    let dni = prompt("Ingrese su DNI");
    let obraSocialNombre = prompt("Ingrese el nombre de su obra social");
    let obraSocialNumero = prompt("Ingrese el número de su obra social");
    let dia = prompt("Ingrese el día que le gustaría asistir (dd/mm)");

    nombreElement.textContent = `Gracias ${nombre} sus datos fueron tomados`;
    dniElement.textContent = `Su DNI: ${dni}`;
    obraSocialNombreElement.textContent = `Su obra social: ${obraSocialNombre}`;
    obraSocialNumeroElement.textContent = `El número de la obra social: ${obraSocialNumero}`;
    diaElement.textContent = `Su turno es el día: ${dia}`;
  } else {
    respuesta.innerHTML = "Gracias por elegirnos";
  }
}

