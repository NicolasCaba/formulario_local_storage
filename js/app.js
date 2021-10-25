function guardarDatos(datos) {
  const inputNombres = document.querySelector('#nombres');
  const inputApellidos = document.querySelector('#apellidos');
  const inputDireccion = document.querySelector('#direccion');
  const inputTelefono = document.querySelector('#telefono');
  const inputCorreo = document.querySelector('#correo');

  const datosDeContacto = {
    nombres: inputNombres.value,
    apellidos: inputApellidos.value,
    direccion: inputDireccion.value,
    telefono: inputTelefono.value,
    correo: inputCorreo.value,
  };

  if (datos === null) {
    const creacionDatos = [];
    creacionDatos.push(datosDeContacto);
    return creacionDatos;
  }
  datos.push(datosDeContacto);
  return datos;
}

function mostrarDatos(datos) {
  const divDatos = document.querySelector('#datos');

  datos.forEach((dato) => {
    const cardDiv = document.createElement('DIV');
    cardDiv.classList.add('card');
    cardDiv.classList.add('my-3');

    const cardHeader = document.createElement('H5');
    cardHeader.classList.add('card-header');
    cardHeader.classList.add('bg-dark');
    cardHeader.classList.add('text-light');
    cardHeader.textContent = `${dato.nombres} ${dato.apellidos}`;

    const cardDivBody = document.createElement('DIV');
    cardDivBody.classList.add('card-body');

    const cardDivText = document.createElement('DIV');
    cardDivText.classList.add('card-text');

    const pDireccion = document.createElement('P');
    pDireccion.innerHTML = `<span class="fw-bold">Direccion:</span> ${dato.direccion}`;

    const pTelefono = document.createElement('P');
    pTelefono.innerHTML = `<span class="fw-bold">Teléfono:</span> ${dato.telefono}`;

    const pCorreo = document.createElement('P');
    pCorreo.innerHTML = `<span class="fw-bold">Correo:</span> ${dato.correo}`;

    cardDivText.appendChild(pDireccion);
    cardDivText.appendChild(pTelefono);
    cardDivText.appendChild(pCorreo);

    cardDivBody.appendChild(cardDivText);

    cardDiv.appendChild(cardHeader);
    cardDiv.appendChild(cardDivBody);

    divDatos.appendChild(cardDiv);
  });
}

function guardarStorage(datos) {
  const stringDatos = JSON.stringify(datos);
  localStorage.setItem('datos', stringDatos);
}

function leerStorage() {
  const datos = JSON.parse(localStorage.getItem('datos'));
  return datos;
}

document.addEventListener('DOMContentLoaded', () => {
  const datosInicio = leerStorage();
  if (datosInicio != null) {
    mostrarDatos(datosInicio);
  }

  const botonEnviarContacto = document.querySelector('#btn-enviar-contacto');
  botonEnviarContacto.addEventListener('click', () => {
    const datos = leerStorage();
    const datosNuevos = guardarDatos(datos);
    mostrarDatos(datosNuevos);
    guardarStorage(datosNuevos);
  });
});
