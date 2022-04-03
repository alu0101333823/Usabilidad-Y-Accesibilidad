document.addEventListener('DOMContentLoaded', function() {
  // Elementos a usar
  const divs = document.getElementsByTagName('div').length;
  const p = document.getElementsByTagName('p').length;
  const li = document.getElementsByTagName('li').length;
  const btn = document.getElementById('elements-button');
  const myDiv = document.getElementById('ejercicio3');
  
  btn.onclick = function () {
    const parrafo = document.createElement('div');
    parrafo.innerHTML = `
        <h5 class="center">El usuario ha introducido: </h5>
        <p class="light">Hay ${divs} bloques "divs"</p>
        <p class="light">Hay ${p} bloques "p"</p>
        <p class="light">Hay ${li} bloques "li"</p>
    `;
    myDiv.appendChild(parrafo);
  }
});