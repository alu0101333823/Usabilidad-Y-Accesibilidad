// Cogemos el cuadro de texto
const input = document.getElementById('user-input');
const btn = document.getElementById('input-button');
console.log(input)

// Leemos el texto que tiene dentro y lo guardamos
btn.onclick = function () {
  const texto = input.value;
  const parrafo = document.createElement("p");
  parrafo.innerHTML = texto;
  document.body.appendChild(parrafo);
}

// Creamos otro elemento <p> y con el contenido que leemos

// Ya estparrafo.appendChild(texto);
