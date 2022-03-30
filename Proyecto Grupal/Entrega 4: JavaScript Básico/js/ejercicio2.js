// Almacenamos los elementos que vamos a usar
const input = document.getElementById('user-input');
const inputBlock = document.getElementById('input-zone');
const btn = document.getElementById('input-button');

btn.onclick = function () {
  const parrafo = document.createElement("p");
  parrafo.innerHTML = `
      <h5 class="center">El usuario ha introducido: </h5>
      <p class="light"> ${input.value} </p>
  `;
  inputBlock.appendChild(parrafo);
}


